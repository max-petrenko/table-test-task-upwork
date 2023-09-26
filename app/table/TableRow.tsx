import { TableCell } from '@/app/table/TableCell'
import { DisplayStampedRecipe } from '@/app/table/page'
import { Draggable } from 'react-beautiful-dnd'

type Props ={
  recipe: DisplayStampedRecipe
  index: number
}

export const TableRow = ({recipe, index}: Props) => {
  const pureRecipe = {...recipe}
  delete pureRecipe.tID
  return (
    <Draggable draggableId={recipe.tID} index={index}>
      {(provided) => (
        <tr ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps}>
          <TableCell>※</TableCell>
          {Object.values(pureRecipe).map(spec => spec && <TableCell key={spec}>{spec}</TableCell>)}
        </tr>
      )}

    </Draggable>
  )
}
