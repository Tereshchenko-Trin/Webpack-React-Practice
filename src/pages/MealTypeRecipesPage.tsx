import { useParams } from 'react-router-dom'
import { useGetRecipesByMealTypeQuery } from '@/services/api'
import { useResipesData } from '@/hooks/useRecipesData'
import { IRecipeData, IQueryResult } from '@/types/common'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

export default function MealTypeRecipesPage() {
  const { mealType } = useParams<{ mealType: string }>()
  const hookArgs = {
    queryHook: useGetRecipesByMealTypeQuery as (
      arg: string
    ) => IQueryResult<IRecipeData[]>,
    queryArg: mealType,
  }
  const { recipes, isLoading, isNotFound } = useResipesData<
    IRecipeData[],
    string
  >(hookArgs)

  function renderCards(recipes: IRecipeData[]) {
    return recipes.map((recipe: IRecipeData) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))
  }

  if (isLoading) return <BootLoader />

  if (isNotFound) return <PageTitle>Recipes not found</PageTitle>

  return <RecipeCardsList>{renderCards(recipes)}</RecipeCardsList>
}
