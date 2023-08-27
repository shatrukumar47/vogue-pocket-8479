import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleExercise from "./SingleExercise";
import { Grid, GridItem } from "@chakra-ui/react";
const Exercise = () => {
  const [exercise, setExercise] = useState([]);

  function getData() {
    axios("http://localhost:8080/yoga").then((res) => {
      setExercise(res.data.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {exercise?.map((el) => (
          <GridItem key={el?._id}>
            <SingleExercise el={el} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Exercise;
