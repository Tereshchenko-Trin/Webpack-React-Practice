import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IRecipesPageWrapperProps } from '@/types/commonTypes'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

export function RecipesPageWrapper<TData, TArg = void>({
  queryHook,
  children,
  queryArg,
}: IRecipesPageWrapperProps<TData, TArg>) {
  const navigate = useNavigate()
  const { data: recipes, isLoading, error } = queryHook(queryArg as TArg)

  useEffect(() => {
    if (error) {
      const errorMessage = 'An API error occurred'
      navigate('/error', { replace: true, state: { errorMessage } })
    }
  }, [error, navigate])

  if (isLoading || error) {
    return <BootLoader />
  }

  if (!recipes) return <PageTitle>Recipes not found</PageTitle>

  return <>{children(recipes)}</>
}
