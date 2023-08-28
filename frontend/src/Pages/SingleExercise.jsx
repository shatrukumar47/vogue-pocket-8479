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
  VStack,
  Box,
  useToast,
} from "@chakra-ui/react";
import {
  Card,
  AspectRatio,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Input,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getLS } from "../utils/localStorage";

const SingleExercise = ({ el }) => {
  const { calories, category, duration, title, url } = el;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeInput, setTimeInput] = useState("");
  const [calorieCount, setCalorieCount] = useState(0);

  //Redux
  const userid = getLS("auth")?.userid || "";

  //Toast Feature
  const toast = useToast();
  const positions = ["top"];

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
  const handleSave = () => {
    axios
      .post("https://fair-teal-chipmunk-tam.cyclic.cloud/exercise/add", {
        exercise: { url: url, calories: calorieCount },
        calories: calorieCount,
        userid: userid,
      })
      .then((res) =>{
        toast({
          title: `Congratulations ❤`,
          position: positions[0],
          isClosable: true,
          duration: 1000,
          status: "success",
        });
        onClose()
      });
  };

  const boxshadow_before = "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;";
  const boxshadow_after =
    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px";

  return (
    <div>
      <Card
        padding={"0px"}
        boxShadow={boxshadow_before}
        borderRadius={"15px"}
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)", boxShadow: boxshadow_after, borderRadius:"15px", border:"2px solid #00163A" }}
      >
        <CardBody padding={"5px"}>
          <AspectRatio width="100%" ratio={1}>
            <iframe title="naruto" src={url} allowFullScreen />
          </AspectRatio>
          <VStack
            mt="2"
            spacing="2"
            textAlign={"center"}
            padding={"5px"}
            justifyContent={"space-between"}
            height={"210px"}
          >
            <VStack>
              <Heading fontSize="17px" color={"green"}>
                {title}
              </Heading>
              <Text color={"gray.400"}>{category.toUpperCase()}</Text>
              <Text color="blue.600" fontSize="17px" fontWeight={"bold"}>
                Burn = {calories} Calories 🔥
              </Text>
              <Text color="green.600" fontSize="16px" fontWeight={"bold"}>
                ⌚In {duration} min.
              </Text>
            </VStack>
            <Box paddingBottom={"5px"}>
              <Button
                width={"150px"}
                m={"auto"}
                variant="solid"
                colorScheme="orange"
                onClick={onOpen}
              >
                Burn Calories 🔥
              </Button>
            </Box>
          </VStack>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#028091"} color={"white"}>Calories Burned Calculator 🔥</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} paddingTop={"20px"}>
            <Text color={"red"}>♥ Track calories burned: Enter duration, unveil progress.</Text>
            <Input
              placeholder="Enter time in minute"
              value={timeInput}
              onChange={handleTimeInput}
              margin={"20px auto"}
              mb={3}
            />
            <Button colorScheme="orange" onClick={calculateCalories}>
              Calculate Calories
            </Button>
            {calorieCount > 0 && (
              <Text fontWeight={"bold"} mt={3}>🔥 You have burned total = {calorieCount.toFixed(2)} calories.</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <ButtonGroup spacing={4}>
              <Button colorScheme="green" onClick={handleSave}>
                Save Your Record
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SingleExercise;
