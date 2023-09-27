import { Draggable } from 'react-beautiful-dnd'
import { Recipe } from '@/app/table/mock-data'
import { cx } from '@/lib/classnames'

const DraggerIcon = (props) => (
  //A wrapper div is added due to buggy behaviour of svg element when it receives dragHandle props
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 20" >
      <rect x="0" y="2" width="40" height="4" rx="3" ry="3" fill="currentColor" />
      <rect x="0" y="15" width="40" height="4" rx="3" ry="3" fill="currentColor" />
    </svg>
  </div>
)

const cellClasses = `
whitespace-nowrap text-orange-600 text-center p-3 w-[200px] 
[&:nth-child(2)]:w-[250px] [&:nth-child(2)]:text-left [&:nth-child(2)]:text-xl [&:nth-child(2)]:font-bold [&:nth-child(2)]:text-indigo-800
`

type Props = {
  recipe: Recipe
  index: number
}
export const TableRow = ({recipe, index}: Props) => {
  const recipeDetails = {...recipe}
  delete recipeDetails.id
  return (
    <Draggable draggableId={recipe.id} index={index}>
      {(provided, { isDragging }) => (
        <tr ref={provided.innerRef} {...provided.draggableProps} className={cx(isDragging && 'shadow-md border-b-0 opacity-[.90] ', 'table-row bg-white border-b-2 border-indigo-800 min-full-w')}>
          <td className='pl-4 w-10'>
            <DraggerIcon {...provided.dragHandleProps} />
          </td>
          {Object.values(recipeDetails).map(spec => <td className={cellClasses} key={spec}>{spec}</td>)}
          <td/>
        </tr>
      )}

    </Draggable>
  )
}
