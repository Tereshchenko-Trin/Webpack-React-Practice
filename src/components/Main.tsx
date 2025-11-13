import { AppShell } from '@mantine/core'
import { IChildProps } from '@/types/propTypes'

export function Main({ children } : IChildProps) {
  return (
    <AppShell.Main>
      { children }
    </AppShell.Main>
  )
}