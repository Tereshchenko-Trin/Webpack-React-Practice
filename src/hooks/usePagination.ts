import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const ITEMS_PER_PAGE: number = 15

export function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPageFromUrl = parseInt(searchParams.get('page') || '1', 10)
  const [currentPage, setCurrentPage] = useState(currentPageFromUrl)

  useEffect(() => {
    if (currentPageFromUrl >= 1) {
      setCurrentPage(currentPageFromUrl)
    }
  }, [currentPageFromUrl])

  const handleChangePage = (page: number) => {
    if (page < 1) return

    setCurrentPage(page)

    setSearchParams(
      (prevParams) => {
        prevParams.set('page', String(page))
        return prevParams
      },
      { replace: true }
    )
  }

  const skipItems = (currentPage - 1) * ITEMS_PER_PAGE

  return {
    currentPage,
    handleChangePage,
    skipItems,
  }
}
