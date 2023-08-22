import React from "react";
import { Box, Button, Container, HStack, Image } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import home from "../Images/home.jpg";
import { Link, useNavigate } from "react-router-dom";

const boxshadow =
  "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"black"} color={"red"}>
      <Container maxW={"7xl"}>
        <HStack justifyContent={"space-between"}>
          <Image
            src={logo}
            width={{ base: "100px", md: "150px", lg: "200px" }}
            cursor={"pointer"}
            onClick={() => navigate("/")}
          />
          <HStack
            spacing={{ base: "10px", md: "10px", lg: "20px" }}
            marginRight={{ base: "0px", md: "20px", lg: "20px" }}
          >
            <Button
              color={"white"}
              bg={"#e02c1f"}
              variant={"solid"}
              borderRadius={"50px"}
              _hover={{
                bg: "#b5271d",
              }}
              p={{ base: "10px", md: "20px", lg: "20px" }}
              boxShadow={{ base: "", md: boxshadow, lg: boxshadow }}
              onClick={() => navigate("/login")}
            >
              Log in
            </Button>
            <Button
              colorScheme="blue"
              borderRadius={"50px"}
              _hover={{
                bg: "skyblue",
              }}
              p={{ base: "10px", md: "20px", lg: "20px" }}
              boxShadow={{ base: "", md: boxshadow, lg: boxshadow }}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
