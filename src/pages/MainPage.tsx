import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useNavigate } from 'react-router-dom'
import { fetchRecipes } from '@/redux/recipes-slice'
import { IRecipeData } from '@/types/recipeData'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

export function MainPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    data: recipes,
    isLoading,
    error,
  } = useAppSelector((state) => state.recipes)

  useEffect(() => {
    const fetchResult = dispatch(fetchRecipes())

    return () => {
      fetchResult.abort()
    }
  }, [dispatch])

  useEffect(() => {
    if (error) {
      navigate('/error', { replace: true, state: { errorMessage: error } })
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
