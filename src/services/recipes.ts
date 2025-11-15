import { get } from '@/utils/client'
import { recipesEndpoint } from '@/config/api'

export const requestRecipes = async() => {
  try {
    const response = await get (recipesEndpoint)

    return response.data
  } catch(error) {
    return {
      hasError: error,
      errorMessage: error.message
    }
  }
}