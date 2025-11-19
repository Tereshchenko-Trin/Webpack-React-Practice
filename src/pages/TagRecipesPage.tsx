import { useParams } from 'react-router-dom'
import { useGetRecipesByTagQuery } from '@/services/api'
import { IRecipeData, IQueryResult } from '@/types/commonTypes'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { RecipesPageWrapper } from '@/components/RecipesPageWrapper'

export default function TagRecipesPage() {
  const { tag } = useParams<{ tag: string }>()

  function renderCards(recipes: IRecipeData[]) {
    return recipes.map((recipe: IRecipeData) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))
  }

  return (
    <RecipesPageWrapper<IRecipeData[], string>
      queryHook={
        useGetRecipesByTagQuery as (arg: string) => IQueryResult<IRecipeData[]>
      }
      queryArg={tag}
    >
      {(recipes) => <RecipeCardsList>{renderCards(recipes)}</RecipeCardsList>}
    </RecipesPageWrapper>
  )
}
