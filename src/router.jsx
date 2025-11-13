import { createBrowserRouter } from 'react-router-dom'
import { StartPage } from '@/pages/StartPage'
import { Layout } from '@/components/Layout'
import { MainPage } from '@/pages/MainPage'
import { FirstPage } from '@/pages/FirstPage'
import { SecondPage } from '@/pages/SecondPage'
import { ThirdPage } from '@/pages/ThirdPage'
import { ErrorPage } from '@/pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/main',
        element: <MainPage />
      },
      {
        path: '/first',
        element: <FirstPage />
      },
      {
        path: '/second',
        element: <SecondPage />
      },
      {
        path: '/third',
        element: <ThirdPage />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])