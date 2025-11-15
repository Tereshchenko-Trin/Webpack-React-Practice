import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchRecipe } from '@/redux/recipe-slice'
import { RecipeInfo } from '@/components/RecipeInfo'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

export function RecipePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams<string>()
  const { data: recipe, isLoading, error } = useAppSelector((state) => state.recipe)

  useEffect(() => {
    dispatch(fetchRecipe(Number(id)))
  }, [dispatch, id])

  if(isLoading) return <BootLoader />

  if(error) navigate('/error')

  if(!recipe) return <PageTitle>Recipe not found</PageTitle>

  return(
    <>
      <RecipeInfo key={recipe.id} { ...recipe } />
    </>
  )
}