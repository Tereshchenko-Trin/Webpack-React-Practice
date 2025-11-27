import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { StartPage } from '@/pages/StartPage'
import { Layout } from '@/components/Layout'

const ErrorPage = React.lazy(() => import('@/pages/ErrorPage'))
const MainPage = React.lazy(() => import('@/pages/MainPage'))
const MealTypeRecipesPage = React.lazy(() =>
  import('@/pages/MealTypeRecipesPage')
)
const TagRecipesPage = React.lazy(() => import('@/pages/TagRecipesPage'))
const SearchResultsPage = React.lazy(() => import('@/pages/SearchResultsPage'))
const RecipePage = React.lazy(() => import('@/pages/RecipePage'))

export const router = createHashRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/category/:mealType',
        element: <MealTypeRecipesPage />,
      },
      {
        path: '/tag/:tag',
        element: <TagRecipesPage />,
      },
      {
        path: '/search/:query',
        element: <SearchResultsPage />,
      },
      {
        path: '/recipe/:id',
        element: <RecipePage />,
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])
