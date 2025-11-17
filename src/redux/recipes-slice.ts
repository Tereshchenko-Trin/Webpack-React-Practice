import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestRecipes } from '@/services/recipes'
import { IRecipeData } from '@/types/recipeData'

interface IRecipesState {
  data: IRecipeData[],
  isLoading: boolean,
  error?: string | null
}

const initialState: IRecipesState = {
  data: [],
  isLoading: false,
  error: null
}

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async() => {
  const data = await requestRecipes()

  return data
})

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    .addCase(fetchRecipes.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload.recipes
    })
    .addCase(fetchRecipes.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export const recipesReducer = recipesSlice.reducer