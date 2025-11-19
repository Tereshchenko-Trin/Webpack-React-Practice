import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestRecipe } from '@/services/recipe'
import { IRecipeData } from '@/types/recipeData'

interface IRecipeState {
  data: IRecipeData | null
  isLoading: boolean
  error?: string | null
}

interface IErrorPayload {
  errorMessage: string
  errorCode: string | null
}

const initialState: IRecipeState = {
  data: null,
  isLoading: false,
  error: null,
}

export const fetchRecipe = createAsyncThunk<
  IRecipeData,
  number,
  { rejectValue: IErrorPayload }
>('recipe/fetchRecipe', async (id: number, { rejectWithValue, signal }) => {
  try {
    const data = await requestRecipe(id, signal)

    return data
  } catch (error) {
    const errorPayload: IErrorPayload = {
      errorMessage: error.message || 'Unknown error',
      errorCode: error.code || null,
    }

    console.log(error)
    return rejectWithValue(errorPayload)
  }
})

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
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

export const { clearError } = recipeSlice.actions

export const recipeReducer = recipeSlice.reducer
