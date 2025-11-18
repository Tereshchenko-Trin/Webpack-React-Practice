import { AppShell, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function Header() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell.Header p="12">
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        Header
      </Group>
    </AppShell.Header>
  )
}
