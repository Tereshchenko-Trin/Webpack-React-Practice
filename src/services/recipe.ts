import { get } from '@/utils/client'
import { recipeEndpoint } from '@/config/api' 

export const requestRecipe = async(id: number) => {
  try {
    const response = await get(`${recipeEndpoint}${id}`)

    return response.data
  } catch(error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}