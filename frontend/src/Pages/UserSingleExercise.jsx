

import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { Card, AspectRatio, CardBody, CardFooter, Stack, Text, Heading, Divider, Button, ButtonGroup, Input } from '@chakra-ui/react';

const UserSingleExercise = ({ el }) => {
  const { calories, category, duration, title, url } = el;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeInput, setTimeInput] = useState('');
  const [calorieCount, setCalorieCount] = useState(0);

  const handleTimeInput = (event) => {
    setTimeInput(event.target.value);
  };

  const calculateCalories = () => {
    if (timeInput && /^\d+$/.test(timeInput)) {
      const time = parseInt(timeInput, 10);
      const calculatedCalories = (calories / duration) * time;
      setCalorieCount(calculatedCalories);
    }
  };
  const handleSave=()=>{
axios.post("http://localhost:8080/exercise/add",{exercise:url,calories:calorieCount})
.then((res)=>onClose())
  }

  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <AspectRatio maxW='560px' ratio={1}>
            <iframe title='naruto' src={url} allowFullScreen />
          </AspectRatio>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>Category: {category}</Text>
            <Text color='blue.600' fontSize='2xl'>
              Calories burn in {duration} minute: {calories}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={onOpen}>
              Calorie Calculator
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Duration multiple of 5
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Calorie Calculator</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              placeholder='Enter time (multiples of 5)'
              value={timeInput}
              onChange={handleTimeInput}
              mb={3}
            />
            <Button colorScheme='blue' onClick={calculateCalories}>
              Calculate
            </Button>
            {calorieCount > 0 && (
              <Text mt={3}>Calories burned: {calorieCount.toFixed(2)}</Text>
            )}
          </ModalBody>

          <ModalFooter>
          <ButtonGroup spacing={4}>
    <Button colorScheme='blue' onClick={handleSave}>Save</Button>
    <Button onClick={onClose}>Cancel</Button>
  </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UserSingleExercise;
