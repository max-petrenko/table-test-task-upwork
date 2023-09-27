'use client';
import { OnDragEndResponder, resetServerContext } from 'react-beautiful-dnd'
resetServerContext()
import { mockRecipes } from './mock-data'
import { useCallback, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { TableRow } from '@/app/table/components/TableRow'
import { TableHead } from '@/app/table/components/TableHead'
import { TableBody } from '@/app/table/components/TableBody'



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
      <div
        className='bg-white border-2 border-indigo-800 rounded-lg mx-auto min-h-[50vh] max-w-[1280px] overflow-x-auto px-5 py-3 text-indigo-800 shadow-xl
    '>
        <table className='table-fixed w-full min-w-[900px]'>
          <TableHead/>
          <DragDropContext onDragEnd={onDragEnd}>
            <TableBody>
              {recipesState.map((recipe, index) => <TableRow index={index} key={recipe.id} recipe={recipe} />)}
            </TableBody>
          </DragDropContext>
        </table>
      </div>

  )

}
