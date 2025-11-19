import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetRecipesQuery } from '@/services/api'
import { IRecipeData } from '@/types/recipeData'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

export default function MainPage() {
  const navigate = useNavigate()
  const { data: recipes, isLoading, error } = useGetRecipesQuery()

  useEffect(() => {
    if (error) {
      const errorMessage = 'An API error occurred'
      navigate('/error', { replace: true, state: { errorMessage } })
    }
  }, [error, navigate])

  if (isLoading || error) {
    return <BootLoader />
  }

  if (!recipes || recipes.length === 0)
    return <PageTitle>Recipes not found</PageTitle>

  function renderCards() {
    return recipes.map((recipe: IRecipeData) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))
  }

  return <RecipeCardsList>{renderCards()}</RecipeCardsList>
}
