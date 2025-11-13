import { NavLink } from 'react-router-dom'
import { AppShell } from '@mantine/core'

export function Navigation() {
  return (
    <AppShell.Navbar p="md">
      <NavLink to={'/first'}>
        <p>First page</p>
      </NavLink>
      <NavLink to={'/second'}>
        <p>Second page</p>
      </NavLink>
      <NavLink to={'/third'}>
        <p>Third page</p>
      </NavLink>
      <NavLink to={'/error'}>
        <p>Error page</p>
      </NavLink>
    </AppShell.Navbar>
  )
}