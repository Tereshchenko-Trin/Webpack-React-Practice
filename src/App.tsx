import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { customTheme } from '@/theme/create-theme'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from '@/router'
import { store } from '@/redux/store'
import { BootLoader } from '@/components/BootLoader'

export function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={customTheme}>
        <Suspense fallback={<BootLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </MantineProvider>
    </Provider>
  )
}
