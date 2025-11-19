import { useParams } from 'react-router-dom'
import { useGetMealTypeRecipesQuery } from '@/services/api'
import { IRecipeData, IQueryResult } from '@/types/commonTypes'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { RecipesPageWrapper } from '@/components/RecipesPageWrapper'

export default function MealTypeRecipesPage() {
  const { mealType } = useParams<{ mealType: string }>()

  function renderCards(recipes: IRecipeData[]) {
    return recipes.map((recipe: IRecipeData) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))
  }

  return (
    <RecipesPageWrapper<IRecipeData[], string>
      queryHook={
        useGetMealTypeRecipesQuery as (
          arg: string
        ) => IQueryResult<IRecipeData[]>
      }
      queryArg={mealType}
    >
      {(recipes) => <RecipeCardsList>{renderCards(recipes)}</RecipeCardsList>}
    </RecipesPageWrapper>
  )
}
