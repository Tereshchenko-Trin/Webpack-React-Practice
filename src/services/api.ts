import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  BASE_URL,
  RECIPES_ENDPOINT,
  RECIPE_ENDPOINT,
  MEAL_TYPE_RECIPES_ENDPOINT,
} from '@/config/api'
import { IRecipeData } from '@/types/commonTypes'

interface IRecipesApiResponse {
  recipes: IRecipeData[]
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['recipes'],
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipeData[], void>({
      query: () => RECIPES_ENDPOINT,
      transformResponse: (response: IRecipesApiResponse) => response.recipes,
      providesTags: ['recipes'],
    }),

    getMealTypeRecipes: builder.query<IRecipeData[], string>({
      query: (mealType) => `${MEAL_TYPE_RECIPES_ENDPOINT}${mealType}`,
      transformResponse: (response: IRecipesApiResponse) => response.recipes,
    }),

    getRecipeById: builder.query<IRecipeData, number>({
      query: (id) => `${RECIPE_ENDPOINT}${id}`,
    }),
  }),
})

export const {
  useGetRecipesQuery,
  useGetMealTypeRecipesQuery,
  useGetRecipeByIdQuery,
} = apiSlice
