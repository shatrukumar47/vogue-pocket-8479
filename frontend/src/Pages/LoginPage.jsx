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
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { login } from "../Redux/authReducer/action";


const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  //Toast Feature
  const toast = useToast();
  const positions = ["top"];
  
  //Redux Store
  const dispatch = useDispatch()
  const isLoading = useSelector((store)=> store.authReducer.isLoading);
  const isAuth = useSelector((store)=> store.authReducer.isAuth);
  const msg = useSelector((store)=> store.authReducer.msg);

  
  //handleLogin
  const handleLogin = ()=>{
    let user = {
      email, password
    }
    if(user && password){
      dispatch(login(user)).then((res)=>{
        if(res){
          if (location?.state?.from) {
            navigate(location.state.from, { replace: true });
          } else {
            navigate("/");
          }
        }
      })
    }else{
      toast({
        title: `Enter valid credentials`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "warning",
      });
    }
  }

  return (
    <Box
      bg={'#00163A'}
      w="100%"
      h="800px"
      paddingTop={"100px"}
      paddingBottom={"30px"}
    >
       <VStack width={{base:"100%", md:"400px", lg:"400px"}} margin={"auto"} spacing={"20px"} padding={"30px"} borderRadius={"10px"} bg={"white"} boxShadow={"rgba(3, 102, 214, 0.3) 0px 5px 500px 10px"}>
          <Heading size={"lg"}>Login</Heading>
          <Divider color={"blue.500"} />
          {msg && <Text color={isAuth ? "green" : "red"}>{msg}</Text>}
          <FormControl>
            <FormLabel>Email : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color={"gray.400"} />
              </InputLeftElement>
              <Input
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(e)=> setEmail(e.target.value)}
                isDisabled={isAuth}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Password : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color={"gray.400"} />
              </InputLeftElement>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                isDisabled={isAuth}
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
          <Text alignSelf={"flex-end"}>New user? <Link to={"/signup"}>Sign up</Link></Text>
          <Button
            w={"full"}
            colorScheme="blue"
            marginTop={"20px"}
            onClick={handleLogin}
            isLoading={isLoading}
            isDisabled={isAuth}
          >
            Log in
          </Button>
        </VStack>
    </Box>
  );
};

export default LoginPage;
