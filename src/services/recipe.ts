import { get } from '@/utils/client'
import { RECIPE_ENDPOINT } from '@/config/api'
import { IRecipeData } from '@/types/recipeData'

export const requestRecipe = async (
  id: number,
  signal?: AbortSignal
): Promise<IRecipeData> => {
  const response = await get<IRecipeData>(`${RECIPE_ENDPOINT}${id}`, {
    signal,
  })

  return response
}
