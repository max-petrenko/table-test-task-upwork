import { TableCell } from '@/app/table/TableCell'
import { Draggable } from 'react-beautiful-dnd'
import { Recipe } from '@/app/table/mock-data'

const DraggerIcon = (props) => (
  //A wrapper div is added due to buggy behaviour of svg element when it receives dragHandle props
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 20" >
      <rect x="0" y="2" width="40" height="4" rx="3" ry="3" fill="currentColor" />
      <rect x="0" y="15" width="40" height="4" rx="3" ry="3" fill="currentColor" />
    </svg>
  </div>
)

type Props = {
  recipe: Recipe
  index: number
}
export const TableRow = ({recipe, index}: Props) => {
  const pureRecipe = {...recipe}
  delete pureRecipe.id
  return (
    <Draggable draggableId={recipe.id} index={index}>
      {(provided) => (
        <tr ref={provided.innerRef} {...provided.draggableProps}  >
          <TableCell>
            <DraggerIcon {...provided.dragHandleProps} />
          </TableCell>
          {Object.values(pureRecipe).map(spec => <TableCell key={spec}>{spec}</TableCell>)}
        </tr>
      )}

    </Draggable>
  )
}
