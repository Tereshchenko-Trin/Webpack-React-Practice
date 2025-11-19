// import { useNavigate } from 'react-router-dom'
// import { useAppDispatch } from '@/hooks/useStore'
// import { clearError } from '@/redux/recipes-slice'
import { Container, Flex, BackgroundImage, Title, Button } from '@mantine/core'
import Background from '@/assets/images/error-bg-image.jpg?as=webp'

export default function ErrorPage() {
  // const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  // const handleClickReturn = () => {
  //   dispatch(clearError())
  //   navigate('/main')
  // }

  return (
    <Container fluid h="100dvh" p="0">
      <BackgroundImage w="100%" h="100%" src={Background}>
        <Flex
          m="auto"
          p="md"
          maw={450}
          h="100%"
          gap="md"
          justify="center"
          align="center"
          direction="column"
        >
          <Title c="black" ta="center" size="h2">
            Oops... Something went wrong. Please, try again later.
          </Title>
          <Button
            // onClick={handleClickReturn}
            color="teal"
            size="md"
            radius="xl"
          >
            Return to main page
          </Button>
        </Flex>
      </BackgroundImage>
    </Container>
  )
}
