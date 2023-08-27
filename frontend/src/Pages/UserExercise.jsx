import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Flex, Grid, GridItem, Button } from "@chakra-ui/react";
import UserSingleExercise from "./UserSingleExercise";
import { useSelector } from "react-redux";

const UserExercise = () => {
  const [exerciseData, setExerciseData] = useState({});

  //Redux
  const userid = useSelector((store) => store.authReducer.userid);

  function getData() {
    const requestData = {
      userid
    };

    axios
      .post("http://localhost:8080/exercise/", requestData)
      .then((res) => {
        console.log(res);
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

  return (
    <div>
      {Object.keys(exerciseData).map((date) => {
        const { calories, exercise, targetCalories, show } = exerciseData[date];

        return (
          <Box key={date} borderWidth="1px" borderRadius="lg" p={4} my={2}>
            <Flex justifyContent="space-between">
              <Text>Date: {date}</Text>
              <Text>Calories: {calories}</Text>
              {targetCalories && <Text>Target Calories: {targetCalories}</Text>}
              <Button onClick={() => handleShow(date)}>show Exercise</Button>
            </Flex>
            {exercise && show && (
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {exercise?.map((el, i) => (
                  <GridItem key={i}>
                    <UserSingleExercise el={el} />
                  </GridItem>
                ))}
              </Grid>
            )}
          </Box>
        );
      })}
    </div>
  );
};

export default UserExercise;
