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
          to={'/first'}
          color="teal"
          label="First page"
        />
        <MantineNavLink
          component={NavLink}
          to={'/second'}
          color="teal"
          label="Second page"
        />
        <MantineNavLink
          component={NavLink}
          to={'/third'}
          color="teal"
          label="Third page"
        />
      </ScrollArea.Autosize>
    </AppShell.Navbar>
  )
}
