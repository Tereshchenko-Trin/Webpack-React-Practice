import { NavLink } from 'react-router-dom'

export function Navigation() {
  return(
    <div>
      <nav>
        <NavLink to={'/first'}>
          <p>First page</p>
        </NavLink>
        <NavLink to={'/second'}>
          <p>Second page</p>
        </NavLink>
        <NavLink to={'/third'}>
          <p>Third page</p>
        </NavLink>
      </nav>
    </div>
  )
}