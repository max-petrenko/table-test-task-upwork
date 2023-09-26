'use client';
import { resetServerContext } from 'react-beautiful-dnd';
resetServerContext()
import { mockRecipeData, Recipe } from './mock-data'
import { useMemo, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { TableRow } from '@/app/table/TableRow'
import { TableHead } from '@/app/table/TableHead'
import { TableBody } from '@/app/table/TableBody'

export interface DisplayStampedRecipe extends Recipe {
  tID: string
}



export default function Page () {
  const recipesForDisplay = useMemo<DisplayStampedRecipe[]>(() =>
    mockRecipeData.map((recipe, index) => ({
      ...recipe,
      tID: 'tID_' + recipe.name + index
    }))
  , [])

  const [recipesState, setRecipesState] = useState(recipesForDisplay)

  return (
    <table className='table-auto border-collapse border border-slate-500'>
      <TableHead/>
      <DragDropContext onDragEnd={() => {}}>
        <TableBody>
        {recipesForDisplay.map((recipe, index) => <TableRow index={index} key={recipe.tID} recipe={recipe} />)}
        </TableBody>
      </DragDropContext>
    </table>
  )

}
