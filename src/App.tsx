import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { customTheme } from '@/theme/create-theme'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from '@/router'
import { store } from '@/redux/store'

export function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={customTheme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  )
}