import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  BASE_URL,
  RECIPES_ENDPOINT,
  RECIPE_ENDPOINT,
  MEAL_TYPE_RECIPES_ENDPOINT,
  TAG_RECIPES_ENDPOINT,
  SEARCH_RESIPES_ENDPOINT,
} from '@/services/config'
import {
  IRecipeData,
  IRecipesApiResponse,
  IPaginationArgs,
  IRecipesCategoryArgs,
} from '@/types/common'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['recipes'],
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipesApiResponse, IPaginationArgs>({
      query: ({ skip = 0, limit = 30 }) =>
        `${RECIPES_ENDPOINT}?skip=${skip}&limit=${limit}`,
      providesTags: ['recipes'],
    }),

    getRecipesByMealType: builder.query<IRecipeData[], IRecipesCategoryArgs>({
      query: ({ category, skip = 0, limit = 30 }) =>
        `${MEAL_TYPE_RECIPES_ENDPOINT}${category}?skip=${skip}&limit=${limit}`,
      providesTags: ['recipes'],
    }),

    getRecipesByTag: builder.query<IRecipeData[], IRecipesCategoryArgs>({
      query: ({ category, skip = 0, limit = 30 }) =>
        `${TAG_RECIPES_ENDPOINT}${category}?skip=${skip}&limit=${limit}`,
      providesTags: ['recipes'],
    }),

    getRecipeById: builder.query<IRecipeData, number>({
      query: (id) => `${RECIPE_ENDPOINT}${id}`,
      providesTags: (result, error, id) => [{ type: 'recipes', id: id }],
    }),

    getRecipesBySearch: builder.query<IRecipeData[], IRecipesCategoryArgs>({
      query: ({ category, skip = 0, limit = 30 }) => {
        const encodedQuery: string = encodeURIComponent(category)
        return `${SEARCH_RESIPES_ENDPOINT}?q=${encodedQuery}&skip=${skip}&limit=${limit}`
      },
      providesTags: ['recipes'],
    }),
  }),
})

export const {
  useGetRecipesQuery,
  useGetRecipesByMealTypeQuery,
  useGetRecipesByTagQuery,
  useGetRecipeByIdQuery,
  useGetRecipesBySearchQuery,
} = apiSlice
