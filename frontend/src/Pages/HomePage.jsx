import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import home from "../Images/home.jpg";
import SimpleSlider from "../Components/Carousel";

const HomePage = () => {
  return (
    <Box
    bg={"#00163A"}
    w="100%"
    h="100vh"
    >
      <Box paddingTop={"30px"}>
        <SimpleSlider />
      </Box>
    </Box>
  );
};

export default HomePage;
