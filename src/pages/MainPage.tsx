import { useGetRecipesQuery } from '@/services/api'
import { useResipesData } from '@/hooks/useRecipesData'
import { IRecipeData, IQueryResult } from '@/types/common'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

export default function MainPage() {
  const hookArgs = {
    queryHook: useGetRecipesQuery as () => IQueryResult<IRecipeData[]>,
  }
  const { recipes, isLoading, isNotFound } = useResipesData<
    IRecipeData[],
    void
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
