import { useParams } from 'react-router-dom'
import { useGetRecipesByMealTypeQuery } from '@/services/api'
import { useResipesData } from '@/hooks/useRecipesData'
import { usePagination } from '@/hooks/usePagination'
import {
  IRecipeData,
  IQueryResult,
  IRecipesApiResponse,
  IRecipesCategoryArgs,
} from '@/types/common'
import { ITEMS_PER_PAGE } from '@/hooks/usePagination'
import { Flex } from '@mantine/core'
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { Pagination } from '@/components/Pagination'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

type GetRecipesByMealTypeHook = (
  arg: IRecipesCategoryArgs
) => IQueryResult<IRecipesApiResponse>

export default function MealTypeRecipesPage() {
  const { mealType } = useParams<{ mealType: string }>()
  const { currentPage, skipItems, handleChangePage } = usePagination()
  const hookArgs = {
    queryHook: useGetRecipesByMealTypeQuery as GetRecipesByMealTypeHook,
    queryArg: { skip: skipItems, limit: ITEMS_PER_PAGE, category: mealType },
  }
  const { data, recipes, isLoading, isNotFound } =
    useResipesData<IRecipesCategoryArgs>(hookArgs)
  const totalPages = data ? Math.ceil(data.total / ITEMS_PER_PAGE) : 0

  function renderCards(recipes: IRecipeData[]) {
    return recipes.map((recipe: IRecipeData) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))
  }

  if (isLoading) return <BootLoader />

  if (isNotFound) return <PageTitle>Recipes not found</PageTitle>

  return (
    <Flex gap="xl" justify="center" direction="column">
      <RecipeCardsList>{renderCards(recipes!)}</RecipeCardsList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleChangePage={handleChangePage}
      />
    </Flex>
  )
}
