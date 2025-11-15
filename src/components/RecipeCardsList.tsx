import { SimpleGrid } from '@mantine/core'
import { IChildProps } from '@/types/propTypes'

export function RecipeCardsList({ children }: IChildProps) {
  return(
    <div style={{ overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} 
        spacing="md"
      >
        {children}
      </SimpleGrid>
    </div>
  )
}