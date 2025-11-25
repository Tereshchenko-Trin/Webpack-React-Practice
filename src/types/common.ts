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
  isFetching: boolean
  error: unknown
}

export interface IRecipesApiResponse {
  recipes: IRecipeData[]
  total: number
  skip: number
  limit: number
}

export interface IPaginationArgs {
  skip?: number
  limit?: number
}

export interface IRecipesCategoryArgs extends IPaginationArgs {
  category: string
}

export interface IUseRecipesDataArgs<TArg = void> {
  queryHook: (arg: TArg) => IQueryResult<IRecipesApiResponse>
  queryArg?: TArg
}

export interface IPaginationProps {
  currentPage: number
  totalPages: number
  handleChangePage: (page: number) => void
}
