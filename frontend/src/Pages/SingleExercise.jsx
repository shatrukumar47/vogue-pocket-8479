import React from 'react'
import { Card,  AspectRatio, CardBody, CardFooter ,Stack,Text,Heading,Divider,Button,ButtonGroup} from '@chakra-ui/react'
const SingleExercise = ({el}) => {
    const {calories,category,duration,title,url}=el
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
  <AspectRatio maxW='560px' ratio={1}>
  <iframe
    title='naruto'
    src={url}
    allowFullScreen
  />
</AspectRatio>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
       Category : {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       Calories burn in {duration} minute : {calories}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
      Calorie Calculator
      </Button>
      <Button variant='ghost' colorScheme='blue'>
      Duration multiple of 5
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default SingleExercise
