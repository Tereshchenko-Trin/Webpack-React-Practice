export interface IRecipeData {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export interface IQueryResult<TData> {
  data: TData | undefined
  isLoading: boolean
  error: unknown
}

export interface IRecipesPageWrapperProps<TData, TArg = void> {
  queryHook: (arg: TArg) => IQueryResult<TData>
  queryArg?: TArg
  children: (recipes: TData) => React.ReactNode
}
