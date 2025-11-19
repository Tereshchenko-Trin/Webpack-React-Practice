import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { StartPage } from '@/pages/StartPage'
import { Layout } from '@/components/Layout'

const ErrorPage = React.lazy(() => import('@/pages/ErrorPage'))
const MainPage = React.lazy(() => import('@/pages/MainPage'))
const FirstPage = React.lazy(() => import('@/pages/FirstPage'))
const SecondPage = React.lazy(() => import('@/pages/SecondPage'))
const ThirdPage = React.lazy(() => import('@/pages/ThirdPage'))
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
        path: '/first',
        element: <FirstPage />,
      },
      {
        path: '/second',
        element: <SecondPage />,
      },
      {
        path: '/third',
        element: <ThirdPage />,
      },
      {
        path: '/:id',
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
