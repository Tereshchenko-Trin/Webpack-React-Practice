import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestRecipes } from '@/services/recipes'
import { IRecipeData } from '@/types/recipeData'
import { stat } from 'fs'

interface IRecipesState {
  data: IRecipeData[]
  isLoading: boolean
  error?: string | null
}

interface IErrorPayload {
  errorMessage: string
  errorCode: string | null
}

const initialState: IRecipesState = {
  data: [],
  isLoading: false,
  error: null,
}

export const fetchRecipes = createAsyncThunk<
  IRecipeData[],
  undefined,
  { rejectValue: IErrorPayload }
>('recipes/fetchRecipes', async (_, { rejectWithValue, signal }) => {
  try {
    const data = await requestRecipes(signal)

    return data.recipes
  } catch (error) {
    const errorPayload: IErrorPayload = {
      errorMessage: error.message || 'Unknown error',
      errorCode: error.code || null,
    }

    return rejectWithValue(errorPayload)
  }
})

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        const isCancelled: boolean =
          action.payload?.errorCode === 'ERR_CANCELED' ||
          action.error.message === 'canceled'
        state.isLoading = false
        if (isCancelled) {
          state.error = null
        } else {
          state.error = action.payload?.errorMessage || action.error.message
        }
      })
  },
})

export const { clearError } = recipesSlice.actions

export const recipesReducer = recipesSlice.reducer
