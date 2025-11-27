import { AppShell, Group, Burger } from '@mantine/core'
import { SearchForm } from '@/components/SearchForm'

export function Header({ toggleNavbar }: { toggleNavbar: () => void }) {
  return (
    <AppShell.Header p="md" pl="28">
      <Group h="100%" px="0" display="flex" justify="space-between">
        <Burger onClick={toggleNavbar} hiddenFrom="sm" size="sm" />
        Recipes
        <SearchForm />
      </Group>
    </AppShell.Header>
  )
}
