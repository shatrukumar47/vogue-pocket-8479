import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Vortex } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box>
      <Container
        maxW={"100px"}
        padding={"100px 0px 100px 0px"}
        height={"600px"}
      >
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </Container>
    </Box>
  );
};

export default Loading;
