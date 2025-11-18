import { configureStore } from '@reduxjs/toolkit'
import { recipeReducer } from '@/redux/recipe-slice'
import { recipesReducer } from '@/redux/recipes-slice'

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    recipes: recipesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch