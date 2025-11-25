import { useGetRecipesQuery } from '@/services/api'
import { useResipesData } from '@/hooks/useRecipesData'
<<<<<<< HEAD
import { usePagination } from '@/hooks/usePagination'
import {
  IRecipeData,
  IQueryResult,
  IRecipesApiResponse,
  IPaginationArgs,
} from '@/types/common'
import { ITEMS_PER_PAGE } from '@/hooks/usePagination'
import { Flex } from '@mantine/core'
=======
import { IRecipeData, IQueryResult } from '@/types/common'
>>>>>>> origin/main
import { RecipeCard } from '@/components/RecipeCard'
import { RecipeCardsList } from '@/components/RecipeCardsList'
import { Pagination } from '@/components/Pagination'
import { BootLoader } from '@/components/BootLoader'
import { PageTitle } from '@/components/PageTitle'

<<<<<<< HEAD
type GetRecipesHook = (
  arg: IPaginationArgs
) => IQueryResult<IRecipesApiResponse>

export default function MainPage() {
  const { currentPage, skipItems, handleChangePage } = usePagination()
  const hookArgs = {
    queryHook: useGetRecipesQuery as GetRecipesHook,
    queryArg: { skip: skipItems, limit: ITEMS_PER_PAGE },
  }
  const { data, recipes, isLoading, isNotFound } =
    useResipesData<IPaginationArgs>(hookArgs)
  const totalPages = data ? Math.ceil(data.total / ITEMS_PER_PAGE) : 0

=======
export default function MainPage() {
  const hookArgs = {
    queryHook: useGetRecipesQuery as () => IQueryResult<IRecipeData[]>,
  }
  const { recipes, isLoading, isNotFound } = useResipesData<
    IRecipeData[],
    void
  >(hookArgs)
>>>>>>> origin/main
  function renderCards(recipes: IRecipeData[]) {
    return recipes.map((recipe: IRecipeData) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))
  }

  if (isLoading) return <BootLoader />

  if (isNotFound) return <PageTitle>Recipes not found</PageTitle>

<<<<<<< HEAD
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
=======
  return <RecipeCardsList>{renderCards(recipes)}</RecipeCardsList>
>>>>>>> origin/main
}
