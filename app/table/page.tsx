'use client';
import { mockRecipes, Recipe } from './mock-data'
import { useCallback, useState } from 'react'
import { TableRow } from '@/app/table/components/TableRow'
import { TableHead } from '@/app/table/components/TableHead'

import type { DragEndEvent, SensorDescriptor, SensorOptions } from '@dnd-kit/core'
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';


type Props = {
  sensors: SensorDescriptor<SensorOptions>[]
}
const RecipesTable = ({sensors}: Props) => {
  const [recipesState, setRecipesState] = useState<Recipe[]>(mockRecipes)

  const onDragEnd = useCallback<(result: DragEndEvent) => void>((result) => {
    const { active, over } = result

    if (!over || active.id === over.id) return

    const newRecipesState = Array.from(recipesState)
    newRecipesState.splice(recipesState.findIndex(recipe => recipe.id === active.id), 1)
    newRecipesState.splice(recipesState.findIndex(recipe => recipe.id === over.id), 0, recipesState.find(recipe => recipe.id === active.id)!)
    setRecipesState(newRecipesState)
  }, [recipesState])

  return (
    //interplay of this wrapper and table's styles makes the table responsive and scrollable on small window sizes
    <div
      className='bg-white border-2 border-indigo-800 rounded-lg mx-auto min-h-[50vh] max-w-[1280px] overflow-x-auto px-5 py-3 text-indigo-800 shadow-xl'>
      <table className='table whitespace-nowrap w-full min-w-[900px]'>
        <TableHead/>
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={onDragEnd}
          sensors={sensors}
        >
          <SortableContext
            items={recipesState.map(recipe => recipe.id)}
            strategy={verticalListSortingStrategy}
          >
            <tbody>
            {recipesState.map(recipe => <TableRow key={recipe.id} recipe={recipe} />)}
            </tbody>
          </SortableContext>
        </DndContext>
      </table>
    </div>
  )
}


export default function RecipesPage () {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  return <RecipesTable sensors={sensors} />
}
