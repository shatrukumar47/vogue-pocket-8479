import loginImg from "../Images/loginImg.jpg";
import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignupPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [user, setUser] = useState(initialState);
  const [checkPass, setCheckPass] = useState(false);

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  //handleChange
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //handle Signup
  const handleSignup = () => {
    if (
      user?.username &&
      user?.email &&
      user?.password &&
      user?.confirm_password
    ) {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let check = re.test(user?.password);
      if (check) {
        setCheckPass(false);
        if (user?.password != user?.confirm_password) {
          toast({
            title: `Please enter the same password`,
            position: positions[0],
            isClosable: true,
            duration: 1000,
            status: "warning",
          });
        } else {
          //dispatcher goes here
          axios.post(`https://fair-teal-chipmunk-tam.cyclic.cloud/users/register`,user).then((res)=>{
            console.log(res.data)
          })
          toast({
            title: `Welcome to FitQuest`,
            position: positions[0],
            isClosable: true,
            duration: 1000,
            status: "success",
          });
          setUser(initialState);
        }
      } else {
        setCheckPass(true);
      }
    } else {
      toast({
        title: `Fill all the inputs`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "warning",
      });
    }
  };

  return (
    <Box
      bg={'#00163A'}
      w="100%"
      h="800px"
      paddingTop={"50px"}
      paddingBottom={"30px"}
    >
      <VStack
        width={{ base: "100%", md: "500px", lg: "500px" }}
        margin={"auto"}
        spacing={"10px"}
        padding={"30px"} borderRadius={"10px"} bg={"white"} boxShadow={"rgba(3, 102, 214, 0.3) 0px 5px 500px 10px"}
      >
        <Heading size={"lg"}>Create Account</Heading>
        <Divider color={"blue.500"} />
        <FormControl>
          <FormLabel>Username : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              name="username"
              value={user?.username}
              placeholder=" Username"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Email : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.400" />
            </InputLeftElement>
            <Input
              type="email"
              name="email"
              value={user?.email}
              placeholder=" Email address"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Password : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.400" />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              name="password"
              placeholder=" Enter password"
              value={user?.password}
              onChange={handleChange}
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
          <FormHelperText
            textAlign={"left"}
            color={checkPass ? "darkred" : "green"}
          >
          use special, numbers, min 8 and 1 uppercase characters
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Confirm Password : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.400" />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              name="confirm_password"
              placeholder="Confirm password"
              value={user?.confirm_password}
              onChange={handleChange}
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
    
        <Text alignSelf={"flex-end"}>
          Already a user?{" "}
          <Link to={"/login"}>
            <Text as={"span"} color={"blue"}>
              Sign in
            </Text>
          </Link>
        </Text>
        <Button
          w={"full"}
          colorScheme="blue"
          marginTop={"20px"}
          onClick={handleSignup}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default SignupPage;
