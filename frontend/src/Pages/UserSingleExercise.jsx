import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

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
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { getLS } from "../utils/localStorage";

const UserSingleExercise = ({ el, date, onExerciseRemoved }) => {
  const { calories, _id, url } = el;

  //Redux
  const userid = getLS("auth")?.userid || "";

  const handleRemove = () => {
    axios
      .post(`https://fair-teal-chipmunk-tam.cyclic.cloud/exercise/delete/${userid}`, {
        exerciseId: _id,
      })
      .then(() => {
        onExerciseRemoved(_id, getFormattedDate(new Date())); // Call the callback after successful removal
      })
      .catch((error) => {
        console.error("Error deleting exercise:", error);
      });
  };

  function getFormattedDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  //handleVideoIcon
  const handleVideoIcon = () => {
    window.open(url, "_blank");
  };

  return (
    <HStack
      width={"100%"}
      justifyContent={"space-between"}
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
      }
      paddingRight={"20px"}
    >
      <HStack spacing={"20px"}>
        <Image
          cursor={"pointer"}
          onClick={handleVideoIcon}
          w={"50px"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHWLyaSJh_FHHKfVYk2Uo5lsfCprd1H9E0Q&usqp=CAU"
        />
        <Text color="green" fontSize="17px">
          🔥 Total Burned Calories = {calories}
        </Text>
      </HStack>
      {getFormattedDate(new Date()) == date && (
        <FaTrashAlt
          fontSize={"20px"}
          color="red"
          onClick={handleRemove}
          cursor={"pointer"}
        />
      )}
    </HStack>
  );
};

export default UserSingleExercise;
