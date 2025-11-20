import { Link } from 'react-router-dom'
import { Card, Image, Group, Badge, Text } from '@mantine/core'
import { IRecipeData } from '@/types/common'
import { ratingColor } from '@/utils/colorProperty'

export function RecipeCard({
  id,
  image,
  name,
  rating,
  difficulty,
  caloriesPerServing,
  cookTimeMinutes,
  tags,
}: IRecipeData) {
  function renderListItems(arr: string[]): React.ReactNode {
    return arr.map((item) => {
      return `#${item} `
    })
  }

  return (
    <Card
      w="100%"
      shadow="sm"
      padding="md"
      component={Link}
      to={`/recipe/${String(id)}`}
    >
      <Card.Section>
        <Image src={image} h={220} alt={name} />
      </Card.Section>
      <Group
        justify="space-between"
        mt="md"
        mb="sm"
        wrap="nowrap"
        align="flex-start"
      >
        <Text fw={500} lineClamp={1}>
          {name}
        </Text>
        <Badge color={ratingColor(rating)} miw={38}>
          {rating}
        </Badge>
      </Group>
      <Text size="sm" c="dimmed">
        Difficalty: {difficulty}
      </Text>
      <Text size="sm" c="dimmed">
        Calories per serving: {caloriesPerServing}
      </Text>
      <Text size="sm" c="dimmed">
        Cooking time: {cookTimeMinutes}
      </Text>
      <Text size="sm" c="dimmed" lineClamp={2}>
        {renderListItems(tags)}
      </Text>
    </Card>
  )
}
