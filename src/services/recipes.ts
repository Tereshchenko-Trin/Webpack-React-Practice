import { get } from '@/utils/client'
import { RECIPES_ENDPOINT } from '@/config/api'
import { IRecipeData } from '@/types/recipeData'

interface IRecipesApiResponse {
  recipes: IRecipeData[]
}

export const requestRecipes = async (
  signal?: AbortSignal
): Promise<IRecipesApiResponse> => {
  const response = await get<IRecipesApiResponse>(RECIPES_ENDPOINT, { signal })

  return response
}
