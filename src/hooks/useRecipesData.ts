import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUseRecipesDataArgs } from '@/types/common'

export function useResipesData<TData, TArg = void>({
  queryHook,
  queryArg,
}: IUseRecipesDataArgs<TData, TArg>) {
  const navigate = useNavigate()
  const { data: recipes, isLoading, error } = queryHook(queryArg as TArg)
  const isNotFound =
    !recipes || (Array.isArray(recipes) && recipes.length === 0)

  useEffect(() => {
    if (error) {
      const errorMessage = 'An API error occurred'
      navigate('/error', { replace: true, state: { errorMessage } })
    }
  }, [error, navigate])

  if (error) {
    return {
      recipes: undefined,
      isLoading: false,
      isNotFound: false,
    }
  }

  if (isLoading && !recipes) {
    return {
      recipes: undefined,
      isLoading: true,
      isNotFound: false,
    }
  }

  return {
    recipes,
    isLoading: false,
    isNotFound,
  }
}
