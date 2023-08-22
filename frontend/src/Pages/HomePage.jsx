import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import home from "../Images/home.jpg";

const HomePage = () => {
  return (
    <Box
      bgImage={`url(${home})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      h="100vh"
    >
    </Box>
  );
};

export default HomePage;
