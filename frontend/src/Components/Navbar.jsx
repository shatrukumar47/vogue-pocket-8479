import React from "react";
import { Box, Button, Container, HStack, Image, Text,  } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import home from "../Images/home.jpg";
import {Link, useNavigate } from "react-router-dom";

const boxshadow =
  "rgb(255, 255, 255) 0px 3px 3px -1px, rgba(255, 255, 255, 0.974) 0px 2px 3px -1px";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"black"} color={"white"} padding={"5px"}>
      <Container maxW={"7xl"}>
        <HStack justifyContent={"space-around"}>
          <Image
            src={logo}
            width={{ base: "100px", md: "150px", lg: "150px" }}
            cursor={"pointer"}
            onClick={() => navigate("/")}
          />
          <HStack spacing={"30px"} fontSize={"18px"}>
            <Link to={"/"}><Text as={"span"} _hover = {{color:"red"}}>Home</Text></Link>
            <Link to={"/products"}><Text as={"span"} _hover = {{color:"red"}}>Products</Text></Link>
            <Link to={"/dashboard"} ><Text as={"span"} _hover = {{color:"red"}}>Stats</Text></Link>
          </HStack>
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
