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
import TruncatedText from "./TruncatedText";

const AdminCard = ({item}) => {
  return (
    <VStack
      borderRadius={"20px"}
      width={"300px"}
      padding={"10px"}
      spacing={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Image
        src= {item?.image}
        width={"200px"}
        height={"250px"}
        objectFit={"cover"}
      />
      <Box width={"100%"}>
        <Text fontSize={"16px"} textAlign={"left"} color={"green"}>
          ID : {item?._id}
        </Text>
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"gray.500"}
          fontWeight={"bold"}
        >
          {item?.brand}
        </Text>
          <TruncatedText text={item?.name} maxLength={20} />
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"green"}
          fontWeight={"bold"}
        >
          ₹{item?.price}
        </Text>
        <Text fontSize={"16px"} textAlign={"left"} color={"gray.500"}>
         Category : {item?.category}
        </Text>
        <Text fontSize={"16px"} textAlign={"left"} color={"gray.500"}>
          Rating : {item?.rating}
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
