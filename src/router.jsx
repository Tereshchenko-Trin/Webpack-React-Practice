import { createHashRouter } from 'react-router-dom'
import { StartPage } from '@/pages/StartPage'
import { Layout } from '@/components/Layout'
import { MainPage } from '@/pages/MainPage'
import { FirstPage } from '@/pages/FirstPage'
import { SecondPage } from '@/pages/SecondPage'
import { ThirdPage } from '@/pages/ThirdPage'
import { RecipePage } from '@/pages/RecipePage'
import { ErrorPage } from '@/pages/ErrorPage'

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
