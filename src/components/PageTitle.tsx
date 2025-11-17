import { Title } from '@mantine/core'

export function PageTitle({ children }: {children: React.ReactNode}) {
  return(
    <Title c="black" ta="center" size="h2">{children}</Title>
  )
}