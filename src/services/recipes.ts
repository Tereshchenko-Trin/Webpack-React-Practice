import { get } from "@/utils/client"
import { RECIPES_ENDPOINT } from "@/config/api"

export const requestRecipes = async () => {
  try {
    const response = await get(RECIPES_ENDPOINT)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}
