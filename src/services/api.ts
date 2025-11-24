import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  BASE_URL,
  RECIPES_ENDPOINT,
  RECIPE_ENDPOINT,
  MEAL_TYPE_RECIPES_ENDPOINT,
  TAG_RECIPES_ENDPOINT,
} from '@/services/config'
import { IRecipeData } from '@/types/common'

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

    getRecipesByMealType: builder.query<IRecipeData[], string>({
      query: (mealType) => `${MEAL_TYPE_RECIPES_ENDPOINT}${mealType}`,
      transformResponse: (response: IRecipesApiResponse) => response.recipes,
      providesTags: ['recipes'],
    }),

    getRecipesByTag: builder.query<IRecipeData[], string>({
      query: (tag) => `${TAG_RECIPES_ENDPOINT}${tag}`,
      transformResponse: (response: IRecipesApiResponse) => response.recipes,
      providesTags: ['recipes'],
    }),

    getRecipeById: builder.query<IRecipeData, number>({
      query: (id) => `${RECIPE_ENDPOINT}${id}`,
      providesTags: (result, error, id) => [{ type: 'recipes', id: id }],
    }),
  }),
})

export const {
  useGetRecipesQuery,
  useGetRecipesByMealTypeQuery,
  useGetRecipesByTagQuery,
  useGetRecipeByIdQuery,
} = apiSlice
