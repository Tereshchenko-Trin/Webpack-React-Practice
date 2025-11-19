import { NavLink } from 'react-router-dom'
import { AppShell, ScrollArea, NavLink as MantineNavLink } from '@mantine/core'

export function Navigation() {
  return (
    <AppShell.Navbar p="md">
      <ScrollArea.Autosize offsetScrollbars scrollHideDelay={500}>
        <MantineNavLink
          component={NavLink}
          to={'/main'}
          color="teal"
          label="Main page"
        />
        <MantineNavLink
          component={NavLink}
          to={'/category/breakfast'}
          color="teal"
          label="Breakfasts"
        />
        <MantineNavLink
          component={NavLink}
          to={'/category/lunch'}
          color="teal"
          label="Lunches"
        />
        <MantineNavLink
          component={NavLink}
          to={'/category/dinner'}
          color="teal"
          label="Dinners"
        />
      </ScrollArea.Autosize>
    </AppShell.Navbar>
  )
}
