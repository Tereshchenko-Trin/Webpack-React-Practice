import { Outlet } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'

export function Main() {
  return(
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}