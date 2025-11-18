import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestRecipe } from '@/services/recipe'
import { IRecipeData } from '@/types/recipeData'

interface IRecipeState {
  data: IRecipeData | null,
  isLoading: boolean,
  error?: string | null
}

const initialState: IRecipeState = {
  data: null,
  isLoading: false,
  error: null
}

export const fetchRecipe = createAsyncThunk('recipe/fetchRecipe', async (id: number, { rejectWithValue }) => {
  const data = await requestRecipe(id)

  if(data.hasError) {
    return (rejectWithValue(data))
  }

  return data
})

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},

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
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export const recipeReducer = recipeSlice.reducer