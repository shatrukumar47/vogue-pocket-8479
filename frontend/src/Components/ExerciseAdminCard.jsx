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


const ExerciseAdminCard = ({ item, handleDeleteBTN, handleEditBTN, onOpen, setEditBTN}) => {
  //deleteBtn
  const handleDelete = () => {
    handleDeleteBTN(item?._id);
  };

  //EditBtn
  const handleEdit = () => {
    setEditBTN(true)
    handleEditBTN(item)
    onOpen();
  };

  //handleImageClick
  const handleVideoLink = ()=>{
    window.open(item?.url, "_blank");
  }

  return (
    <VStack
      borderRadius={"20px"}
      width={"300px"}
      padding={"10px"}
      spacing={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Image
        src= "https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?size=626&ext=jpg&ga=GA1.1.1257944628.1683352118&semt=sph"
        width={"200px"}
        height={"250px"}
        objectFit={"cover"}
        cursor={"pointer"}
        onClick={handleVideoLink}
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
          {item?.category}
        </Text>
        <TruncatedText text={item?.title} maxLength={20} />
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"green"}
          fontWeight={"bold"}
        >
          Calories : {item?.calories}
        </Text>
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"green"}
          fontWeight={"bold"}
        >
          Duration : {item?.duration}
        </Text>
      </Box>
      <HStack spacing={"20px"}>
        <Button variant={"outline"} colorScheme="green" onClick={handleEdit}>
          EDIT
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          DELETE
        </Button>
      </HStack>
    </VStack>
  );
};

export default ExerciseAdminCard;
