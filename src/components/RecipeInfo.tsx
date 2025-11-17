import { Flex, Image, Text, List, Stack, Title } from '@mantine/core'
import { IRecipeData } from '@/types/recipeData'

export function RecipeInfo({
  name,
  image,
  ingredients,
  instructions,
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  caloriesPerServing,
}: IRecipeData) {
  function renderListItems(arr: string[]): React.ReactNode {
    return arr.map((item, index) => {
      return <List.Item key={index}>{item}</List.Item>
    })
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap="xl"
      m={{ base: 'auto', sm: '0' }}
    >
      <Image
        radius="md"
        maw={{ base: '100%', md: '220', lg: '400' }}
        h={{ base: '400', md: '100%' }}
        fit="cover"
        src={image}
      />
      <Stack maw="600" gap="md">
        <Stack>
          <Title>{name}</Title>
          <Text>Preparation time: {prepTimeMinutes}</Text>
          <Text>Cooking time: {cookTimeMinutes}</Text>
          <Text>Calories per serving: {caloriesPerServing}</Text>
          <Text>Number of servings: {servings}</Text>
        </Stack>
        <Stack gap="xs">
          <Text>Ingredients:</Text>
          <List withPadding>{renderListItems(ingredients)}</List>
        </Stack>
        <Stack gap="xs">
          <Text>Instructions:</Text>
          <List type="ordered" withPadding>
            {renderListItems(instructions)}
          </List>
        </Stack>
      </Stack>
    </Flex>
  )
}
