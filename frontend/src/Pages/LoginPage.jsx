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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import { login } from "../Redux/authReducer/action";
const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const toast = useToast();
  const positions = ["top"];

  const handleLogin = ()=>{
    let user = {
      email, password
    }
    dispatch(login(user)).then((res)=>{
      toast({
        title: `Login successfull`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "success",
      });
    })
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
