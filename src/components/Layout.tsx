import { AppShell} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'
import { Main } from '@/components/Main'
import { Navigation } from '@/components/Navigation'
import { Header } from '@/components/Header'

export function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: '250',
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </AppShell>
  )
}