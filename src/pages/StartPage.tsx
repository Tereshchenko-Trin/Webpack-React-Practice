import { Link } from 'react-router-dom'
import { Container, Flex, BackgroundImage, Title, Button } from '@mantine/core'
import Background from '@/assets/images/start-bg-image.jpg?as=webp'

export function StartPage() {
  return (
    <Container 
      fluid
      h="100dvh"
      p="0"
    >
      <BackgroundImage
        w="100%"
        h="100%"
        src={Background}
      >
        <Flex
          m="auto"
          p="md"
          maw={460}
          h="100%"
          gap="md"
          justify="center"
          align="center"
          direction="column"
        >
          <Title 
            c="white"
            ta="center"
            size="h2"
          >
            A catalog of the best recipes. Delicious, quick, and easy cooking. Step-by-step recipes with photos.
          </Title>
          <Button 
            component={Link} 
            to='/main' 
            color="teal" 
            size="md" 
            radius="xl"
          >
            Start now
          </Button>
        </Flex>
      </BackgroundImage>
    </Container>
  )
}