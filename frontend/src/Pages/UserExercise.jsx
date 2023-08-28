import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Flex, Grid, GridItem, Button, VStack } from "@chakra-ui/react";
import UserSingleExercise from "./UserSingleExercise";
import { FaArrowDown } from "react-icons/fa";
import { getLS } from "../utils/localStorage";

const UserExercise = () => {
  const [exerciseData, setExerciseData] = useState({});

  //Redux
  const userid = getLS("auth")?.userid || "";

  function getData() {
    const requestData = {
      userid
    };

    axios
      .post("https://fair-teal-chipmunk-tam.cyclic.cloud/exercise/", requestData)
      .then((res) => {
        if(res?.data?.data){
            setExerciseData(res.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching exercise data:", error);
      });
  }

  useEffect(() => {
    if(userid){
        getData();
    }
  }, [userid]);

  const handleShow = (date) => {
    setExerciseData((prevData) => ({
      ...prevData,
      [date]: {
        ...prevData[date],
        show: !prevData[date]?.show,
      },
    }));
  };

  const handleExerciseRemoved = (exerciseId, date) => {
    setExerciseData((prevData) => {
      const updatedData = { ...prevData };
      
      updatedData[date].exercise = updatedData[date].exercise.filter(
        (exercise) => exercise._id !== exerciseId
      );
      return updatedData;
    });
  };

  return (
    <div>
      {Object.keys(exerciseData).reverse().map((date) => {
        const { calories, exercise, targetCalories, show } = exerciseData[date];

        return (
          <Box key={date} borderWidth="1px" borderRadius="lg" p={2} my={2} border={"1px solid teal"}>
            <Flex justifyContent="space-between" alignItems={"center"} marginBottom={"5px"}>
              <Text color={"#028091"} fontWeight={"bold"}>Date: {date}</Text>
              <Text color={"green"} fontSize={"20px"} fontWeight={"bold"}>Burned Calories = {calories}</Text>
              {targetCalories && <Text color={"orange"} fontSize={"20px"} fontWeight={"bold"}>Target Calories = {targetCalories}</Text>}
              <Button rightIcon={<FaArrowDown />} colorScheme="orange" onClick={() => handleShow(date)} >Show Exercise</Button>
            </Flex>
            {exercise && show && (
              <VStack marginTop={"10px"}>
                {exercise?.map((el, i) => (
                    <UserSingleExercise el={el} date={date} onExerciseRemoved={handleExerciseRemoved} />
                ))}
              </VStack>
            )}
          </Box>
        );
      })}
    </div>
  );
};

export default UserExercise;