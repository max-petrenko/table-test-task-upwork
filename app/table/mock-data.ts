export interface Recipe {
  id: string
  name: string
  mealType: string
  prepTime: string
  serves: number
}

export const mockRecipes: Recipe[] = [
  {
    id: 'r-1',
    name: 'Lasagna',
    mealType: 'Supper',
    prepTime: '45 min',
    serves: 4
  },
  {
    id: 'r-2',
    name: 'Pizza',
    mealType: 'Lunch',
    prepTime: '3 hours + 25 min',
    serves: 4
  },
  {
    id: 'r-3',
    name: 'Oatmeal',
    mealType: 'Breakfast',
    prepTime: '25 min',
    serves: 2
  },
]