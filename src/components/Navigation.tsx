import { NavLink } from 'react-router-dom'
import { AppShell, ScrollArea, NavLink as MantineNavLink } from '@mantine/core'

export function Navigation({ closeNavbar }: { closeNavbar: () => void }) {
  return (
    <AppShell.Navbar p="md">
      <ScrollArea.Autosize offsetScrollbars scrollHideDelay={500}>
        <MantineNavLink
          component={NavLink}
          to={'/main'}
          color="teal"
          label="Main page"
          onClick={closeNavbar}
        />
        <MantineNavLink
          component={NavLink}
          to={'/category/breakfast'}
          color="teal"
          label="Breakfasts"
          onClick={closeNavbar}
        />
        <MantineNavLink
          component={NavLink}
          to={'/category/lunch'}
          color="teal"
          label="Lunches"
          onClick={closeNavbar}
        />
        <MantineNavLink
          component={NavLink}
          to={'/category/dinner'}
          color="teal"
          label="Dinners"
          onClick={closeNavbar}
        />
        <MantineNavLink
          component={NavLink}
          to={'/tag/Vegetarian'}
          color="teal"
          label="Vegetarian dishes"
          onClick={closeNavbar}
        />
      </ScrollArea.Autosize>
    </AppShell.Navbar>
  )
}
