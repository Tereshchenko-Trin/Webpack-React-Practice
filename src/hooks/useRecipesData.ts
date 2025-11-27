import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUseRecipesDataArgs, IRecipeData } from '@/types/common'

export function useResipesData<TArg = void>({
  queryHook,
  queryArg,
}: IUseRecipesDataArgs<TArg>) {
  const navigate = useNavigate()
  const { data, error, isLoading, isFetching } = queryHook(queryArg as TArg)

  const recipes: IRecipeData[] | undefined = data?.recipes

  const isNotFound = !isLoading && (!recipes || recipes.length === 0)

  useEffect(() => {
    if (error) {
      const errorMessage = 'An API error occurred'
      navigate('/error', { replace: true, state: { errorMessage } })
    }
  }, [error, navigate])

  return {
    data,
    recipes,
    isLoading: isLoading || isFetching,
    isNotFound,
  }
}
