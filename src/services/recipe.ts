import { get } from "@/utils/client"
import { RECIPE_ENDPOINT } from "@/config/api"

export const requestRecipe = async (id: number) => {
  try {
    const response = await get(`${RECIPE_ENDPOINT}${id}`)

    return response.data
  } catch (error) {
    return {
      hasError: error,
      errorMessage: error.message,
    }
  }
}
