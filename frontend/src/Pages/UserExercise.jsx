import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Text, Flex,Grid,GridItem } from '@chakra-ui/react';
import UserSingleExercise from './UserSingleExercise';

const UserExercise = () => {
    const [exerciseData, setExerciseData] = useState({});

    function getData() {
        axios("http://localhost:8080/exercise/").then((res) => {
            setExerciseData(res.data.data);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {Object.keys(exerciseData).map((date) => {
                const { calories, exercise, targetCalories } = exerciseData[date];
                
                return (
                    <Box key={date} borderWidth="1px" borderRadius="lg" p={4} my={2}>
                        <Flex justifyContent="space-between">
                            <Text>Date: {date}</Text>
                            <Text>Calories: {calories}</Text>
                            {targetCalories && <Text>Target Calories: {targetCalories}</Text>}
                        </Flex>
                        {exercise && (
                           <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                           {exercise?.map((el) => (
                             <GridItem key={el}>
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
}

export default UserExercise;
