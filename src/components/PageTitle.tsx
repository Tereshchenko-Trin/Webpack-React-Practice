import { Title } from '@mantine/core'
import { IChildProps } from '@/types/propTypes'

export function PageTitle({ children }: IChildProps) {
  return(
    <Title c="black" ta="center" size="h2">{children}</Title>
  )
}