import { Recipe } from '@/app/table/mock-data'


const recipeTableColNames: Record<keyof Recipe, string> = {
  name: 'Dish name',
  mealType: 'Meal type',
  prepTime: 'Prep. time',
  serves: '№ of serves'
}

export const TableHead = () => (
  <thead>
  <tr>
    <th className='px-5 border border-slate-600'/>
    {Object.values(recipeTableColNames).map(colName => (<th className='border border-slate-600 p-4' key={colName}>{colName}</th>))}
  </tr>
  </thead>
)
