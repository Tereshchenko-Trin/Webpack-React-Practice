import { createBrowserRouter } from 'react-router-dom'
import { Main } from '@/pages/Main'
import { FirstPage } from '@/pages/FirstPage'
import { SecondPage } from '@/pages/SecondPage'
import { ThirdPage } from '@/pages/ThirdPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
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
  }
])