import loginImg from "../Images/loginImg.jpg";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = ()=>{
    let user = {
      email, password
    }
    console.log(user)
  }



  return (
    <Box
      bgImage={`url(${loginImg})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      h="90vh"
      paddingTop={"100px"}
      color={"white"}
    >
       <VStack width={{base:"100%", md:"400px", lg:"400px"}} margin={"auto"} spacing={"20px"} padding={"20px"}>
          <Heading size={"lg"}>Login</Heading>
          <Divider color={"blue.500"} />
          <FormControl>
            <FormLabel>Email : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Password : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.300" />
              </InputLeftElement>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  style={{ background: "white" }}
                  onClick={handleClick}
                >
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Text alignSelf={"flex-end"}>New user? <Link to={"/signup"}><Text as={"span"} color={"black"}>Sign up</Text></Link></Text>
          <Button
            w={"full"}
            colorScheme="blue"
            marginTop={"20px"}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </VStack>
    </Box>
  );
};

export default LoginPage;
