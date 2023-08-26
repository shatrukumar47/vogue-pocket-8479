import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AdminCard = () => {
  return (
    <VStack
      borderRadius={"20px"}
      width={"300px"}
    //   alignItems={"center"}
      border={"1px solid red"}
      padding={"10px"}
      spacing={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Image
        src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=sph"
        borderRadius={"50%"}
        width={"200px"}
        border={"1px solid red"}
      />
      <Box width={"100%"} border={"1px solid red"}>
        <Text fontSize={"16px"} textAlign={"left"} color={"green"}>
          12
        </Text>
        <Text fontSize={"20px"} textAlign={"left"}>
          Shatrughan Kumar
        </Text>
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"gray.500"}
          fontWeight={"bold"}
        >
          ass
        </Text>
        <Text fontSize={"16px"} textAlign={"left"} color={"gray.500"}>
         vvcvcd
        </Text>
        <Text fontSize={"16px"} textAlign={"left"} color={"gray.500"}>
          fvfdfdf
        </Text>
        <Text fontSize={"16px"} textAlign={"left"} color={"gray.500"}>
          dsdsdsds
        </Text>
      </Box>
      <HStack spacing={"20px"}>
        <Button
          variant={"outline"}
          colorScheme="green"
        >
          EDIT
        </Button>
        <Button colorScheme="red">
          DELETE
        </Button>
      </HStack>
    </VStack>
  );
};

export default AdminCard;
