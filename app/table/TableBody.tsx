import { Droppable } from 'react-beautiful-dnd'
import { ReactNode } from 'react'

export const TableBody = ({children}: { children: ReactNode }) => (
  <Droppable droppableId='tableBody'>
    {(provided) => (
      <tbody ref={provided.innerRef} {...provided.droppableProps}>
      {children}
      {provided.placeholder}
      </tbody>
    )}
  </Droppable>
)
