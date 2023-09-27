import { Recipe } from '@/app/table/mock-data'
import { memo } from 'react'


const recipeTableColNames: Record<Exclude<keyof Recipe, 'id'>, string> = {
  name: 'Recipe name',
  mealType: 'Meal type',
  prepTime: 'Prep. time',
  serves: '№ of serves'
}

//styles extracted for readability; [] selectors are used to not bloat the rendering code
const cellClassnames = `
py-2 px-3 font-normal text-center 
[&:nth-child(2)]:text-left
`

export const TableHead = memo(() => (
  <thead>
  <tr className='border-b-2 border-indigo-800'>
    <th className='w-10'/>
    {Object.values(recipeTableColNames).map(colName => (<th className={cellClassnames} key={colName}>{colName}</th>))}
    <th/>
  </tr>
  </thead>
))

TableHead.displayName = 'TableHead'
