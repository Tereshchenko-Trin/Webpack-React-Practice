import { Grid } from '@mantine/core'
import { RecipeCard } from '@/components/RecipeCard'
import IRecipeData from '@/types/IRecipeData'

export function RecipeCardsList() {
  return(
    <div style={{ overflow: 'hidden', maxWidth: '100%' }}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <RecipeCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <RecipeCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <RecipeCard />
        </Grid.Col>
      </Grid>
    </div>
  )
}