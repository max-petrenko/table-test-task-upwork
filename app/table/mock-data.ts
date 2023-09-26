export interface Recipe {
  name: string
  mealType: string
  prepTime: string
  serves: number
}

export const mockRecipeData: Recipe[] = [
  {
    name: 'Lasagna',
    mealType: 'Supper',
    prepTime: '45 min',
    serves: 4
  },
  {
    name: 'Pizza',
    mealType: 'Lunch',
    prepTime: '3 hours + 25 min',
    serves: 4
  },
  {
    name: 'Oatmeal',
    mealType: 'Breakfast',
    prepTime: '25 min',
    serves: 2
  },
]
