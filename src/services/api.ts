import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, RECIPE_ENDPOINT, RECIPES_ENDPOINT } from '@/config/api'
import { IRecipeData } from '@/types/recipeData'

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

    getRecipeById: builder.query<IRecipeData, number>({
      query: (id) => `${RECIPE_ENDPOINT}${id}`,
    }),
  }),
})

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = apiSlice
