'use client';
import { OnDragEndResponder, resetServerContext } from 'react-beautiful-dnd'
resetServerContext()
import { mockRecipes } from './mock-data'
import { useCallback, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { TableRow } from '@/app/table/TableRow'
import { TableHead } from '@/app/table/TableHead'
import { TableBody } from '@/app/table/TableBody'



export default function Page () {
  const [recipesState, setRecipesState] = useState(mockRecipes)

  const onDragEnd = useCallback<OnDragEndResponder>((result) => {
    const {destination, source, draggableId} = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const newRecipesState = Array.from(recipesState)
    newRecipesState.splice(source.index, 1)
    newRecipesState.splice(destination.index, 0, recipesState.find(recipe => recipe.id === draggableId))
    setRecipesState(newRecipesState)
  }, [recipesState])

  return (
    <table className='table-fixed border-collapse border border-slate-500'>
      <TableHead/>
      <DragDropContext onDragEnd={onDragEnd}>
        <TableBody>
        {recipesState.map((recipe, index) => <TableRow index={index} key={recipe.id} recipe={recipe} />)}
        </TableBody>
      </DragDropContext>
    </table>
  )

}
