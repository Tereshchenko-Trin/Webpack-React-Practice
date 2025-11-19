import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchRecipe } from '@/redux/recipe-slice'
import { RecipeInfo } from '@/components/RecipeInfo'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'
import { isNumId } from '@/utils/idValidation'

export function RecipePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams<string>()
  const {
    data: recipe,
    isLoading,
    error,
  } = useAppSelector((state) => state.recipe)

  useEffect(() => {
    if (isNumId(id)) {
      const fetchResult = dispatch(fetchRecipe(Number(id)))

      return () => {
        fetchResult.abort()
      }
    }
  }, [dispatch, id])

  useEffect(() => {
    if (!isNumId(id)) {
      navigate('/error', { replace: true })
    }
  }, [navigate, id])

  useEffect(() => {
    if (error) {
      navigate('/error', { replace: true, state: { errorMessage: error } })
    }
  }, [error, navigate])

  if (isLoading || error || !isNumId(id)) {
    return <BootLoader />
  }

  if (!recipe) return <PageTitle>Recipe not found</PageTitle>

  return (
    <>
      <RecipeInfo key={recipe.id} {...recipe} />
    </>
  )
}
