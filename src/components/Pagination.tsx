import { Pagination as PaginationComponent } from '@mantine/core'
import { IPaginationProps } from '@/types/common'

export function Pagination({
  currentPage,
  totalPages,
  handleChangePage,
}: IPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  return (
    <PaginationComponent
      value={currentPage}
      onChange={handleChangePage}
      total={totalPages}
      color="teal"
      radius="md"
      m="auto"
    />
  )
}
