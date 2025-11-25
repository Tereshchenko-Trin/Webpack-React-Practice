import { AppShell, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SearchForm } from '@/components/SearchForm'

export function Header() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell.Header p="12">
      <Group h="100%" px="md" display="flex" justify="space-between">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        Header
        <SearchForm />
      </Group>
    </AppShell.Header>
  )
}
