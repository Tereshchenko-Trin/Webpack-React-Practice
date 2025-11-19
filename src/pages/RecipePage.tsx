import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetRecipeByIdQuery } from '@/services/api'
import { RecipeInfo } from '@/components/RecipeInfo'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'
import { isNumId } from '@/utils/idValidation'

export default function RecipePage() {
  const navigate = useNavigate()
  const { id } = useParams<string>()
  const recipeId: number | undefined = isNumId(id) ? Number(id) : undefined
  const {
    data: recipe,
    isLoading,
    error,
  } = useGetRecipeByIdQuery(recipeId, { skip: recipeId === undefined })

  useEffect(() => {
    if (!isNumId(id)) {
      navigate('/error', { replace: true })
    }
  }, [navigate, id])

  useEffect(() => {
    if (error) {
      const errorMessage = 'An API error occurred'
      navigate('/error', { replace: true, state: { errorMessage } })
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
