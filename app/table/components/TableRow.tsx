import type { Recipe } from '@/app/table/mock-data'
import type { CSSProperties } from 'react'
import { cx } from '@/lib/classnames'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Arguments } from '@dnd-kit/sortable/dist/hooks/useSortable'
import { DraggerIcon } from '@/app/table/components/DraggerIcon'



//styles extracted for readability; [] selectors are used to not bloat the rendering code
const cellClasses = `
 text-orange-600 w-[15%] min-w-[70px] text-center p-3 overflow-auto text-ellipsis
 [&:nth-child(2)]:min-w-[250px] [&:nth-child(2)]:w-[20%] [&:nth-child(2)]:text-left [&:nth-child(2)]:text-xl [&:nth-child(2)]:font-bold [&:nth-child(2)]:text-indigo-800
`

type Props = {
  recipe: Recipe
}
export const TableRow = ({ recipe, ...props }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: recipe.id,
    //type coercion needed due to pure typings in original library
  } as Arguments)


  const rowStyles: CSSProperties = {
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  }

  //stripping of data which should not be displayed
  const recipeDetails = { ...recipe }
  delete recipeDetails.id

  return (
    <tr
      {...props}
      {...attributes}
      ref={setNodeRef}
      //'role' set explicitly to unobtrusively override Tailwind styles
      role='row'
      style={rowStyles}
      className={cx(isDragging && 'shadow-md border-b-0 opacity-[.90]', 'table-row bg-white border-b-2 border-indigo-800 min-full-w')}>
      <td className='pl-4 w-10'>
        <DraggerIcon
          ref={setActivatorNodeRef}
          className='cursor-move'
          {...listeners}
        />
      </td>
      {Object.values(recipeDetails).map(detail => <td className={cellClasses} key={detail}>{detail}</td>)}
      <td/>
    </tr>
  )
}
