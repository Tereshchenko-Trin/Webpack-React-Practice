import { NavLink } from 'react-router-dom'
import { AppShell, NavLink as MantineNavLink } from '@mantine/core'

export function Navigation() {  
  return (
    <AppShell.Navbar p="md">
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
    </AppShell.Navbar>
  )
}