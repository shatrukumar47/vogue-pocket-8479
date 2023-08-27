import React, { useEffect, useState } from "react";
import SingleExercise from "./SingleExercise";
import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getExercisesAction } from "../Redux/exerciseReducer/action";
import Pagination from "../Components/Pagination";
import Loading from "../Components/Loading";

const Exercise = () => {
  const [page, setPage] = useState(1);

  //Redux
  const dispatch = useDispatch();
  const exercises = useSelector((store) => store.exerciseReducer.exercises);
  const totalPages = useSelector((store) => store.exerciseReducer.totalPages);
  const isLoading = useSelector((store) => store.exerciseReducer.isLoading);

  useEffect(() => {
    dispatch(getExercisesAction(page, 4));
  }, [page]);

  //handleClickBTN
  const handlePageClick = (value) => {
    setPage(value);
  };

  //loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box paddingTop={"50px"}>
      <Heading textAlign={"center"} color={"#028091"} marginBottom={"20px"}>
        Begin Your Journey to Wellness!
      </Heading>
      <Heading
        fontSize={"20px"}
        textAlign={"center"}
        color={"#028091"}
        marginBottom={"30px"}
      >
        Start the Exercise by Clicking on the Video{" "}
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={5} padding={"10px"}>
        {exercises?.map((el) => (
          <GridItem key={el?._id}>
            <SingleExercise el={el} />
          </GridItem>
        ))}
      </Grid>
      <Box bg={"black"} m={"30px"} padding={"1px"} />
      <Pagination
        totalPages={totalPages}
        page={page}
        handlePageClick={handlePageClick}
      />
      <Box bg={"black"} m={"30px"} padding={"1px"} />
    </Box>
  );
};

export default Exercise;
