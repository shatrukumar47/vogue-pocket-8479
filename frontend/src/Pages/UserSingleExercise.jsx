import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Card,
  AspectRatio,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const UserSingleExercise = ({ el }) => {
  const { calories, _id, url } = el;
  console.log(el);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeInput, setTimeInput] = useState("");
  const [calorieCount, setCalorieCount] = useState(0);

  const handleSave = () => {
    axios
      .post("http://localhost:8080/exercise/delete/", {
        exercise: url,
        calories: calorieCount,
      })
      .then((res) => onClose());
  };

  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe title="naruto" src={url} allowFullScreen />
          </AspectRatio>
          <Stack mt="6" spacing="3">
            <Text color="blue.600" fontSize="2xl">
              Calories burn by you: {calories}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Remove
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserSingleExercise;
