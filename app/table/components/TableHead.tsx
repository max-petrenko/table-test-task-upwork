import { Recipe } from '@/app/table/mock-data'


const recipeTableColNames: Record<Exclude<keyof Recipe, 'id'>, string> = {
  name: 'Recipe name',
  mealType: 'Meal type',
  prepTime: 'Prep. time',
  serves: '№ of serves'
}
const cellClassnames = `whitespace-nowrap py-2 px-3 w-[200px] font-normal text-center 
[&:nth-child(2)]:w-[250px] [&:nth-child(2)]:text-left`

export const TableHead = () => (
  <thead>
  <tr className='border-b-2 border-indigo-800 '>
    <th className='w-10'/>
    {Object.values(recipeTableColNames).map(colName => (<th className={cellClassnames} key={colName}>{colName}</th>))}
    <th/>
  </tr>
  </thead>
)
