import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Flex,
  Text,
  HStack,
  Input,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import home from "../Images/home.jpg";
import SimpleSlider from "../Components/Carousel";
import yogaAnime from "../Images/yogaAnime.gif";
import runningAnime from "../Images/runningAnime.gif";
import pushupAnime from "../Images/pushupAnime.gif";
import subscribeAnime from "../Images/subscribeAnime.gif";
import Subscription from "../Components/Subscription";
import FeaturesCard from "../Components/FeaturesCard";

//#00163A

const HomePage = () => {
  const [subscribe, setSubscribe] = useState("");

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  //handleSubscribe
  const handleSubscribe = ()=>{
    if(subscribe){
      console.log(subscribe)
      toast({
        title: `Thank You for subscribing to FitQuest`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "success",
      });
    }
  }

  return (
    <Box>
      <Box bg={"#00163A"} h={"640px"}>
        <Container paddingTop={"60px"} maxW={"7xl"}>
          <SimpleSlider />
          <HStack spacing={"20px"} justifyContent={"center"} marginTop={"60px"}>
            <Image
              _hover={{ cursor: "pointer" }}
              src={
                "https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
              }
              width={"225px"}
              objectFit={"cover"}
            />

            <Image
              _hover={{ cursor: "pointer" }}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRic3NEzq52LhkWEYfxZA6YAPTT3oYQ_6C27Q&usqp=CAU"
              }
              width={"200px"}
              objectFit={"cover"}
              borderRadius={"12px"}
              border={"1px solid white"}
            />
          </HStack>
        </Container>
      </Box>

      <Box>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"350px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={runningAnime}
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  fontSize={"22px"}
                  as={"span"}
                  color={"black"}
                  fontWeight={"bold"}
                >
                  TRACK ACTIVITIES. BOOST PERFORMANCE. CELEBRATE SUCCESS.
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Record your workouts and review your statistics. Join challenges
                to get motivated – push your limits. Share your success with a
                global community and reach your goals with every step. Are you
                ready? Download FitQuest Running and get active with us.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  fontSize={"22px"}
                  as={"span"}
                  color={"black"}
                  fontWeight={"bold"}
                >
                  WORK OUT. BUILD STRENGTH. STAY ACTIVE & HEALTHY.
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Select muscle groups and create your own workout that fits your
                schedule. Join challenges: compare your activity to others and
                push yourself in new ways. Workout anywhere, any time. Start
                today! Enjoy expert guidance with workout plans for every level
                in FitQuest Training.
              </Text>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"350px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  src={yogaAnime}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      <Box>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"350px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  src={pushupAnime}
                />
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  fontSize={"22px"}
                  as={"span"}
                  color={"black"}
                  fontWeight={"bold"}
                >
                  WORK OUT. BUILD STRENGTH. BECOME A HERO.
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Select muscle groups and create your own workout that fits your
                schedule. Join challenges: compare your activity to others and
                push yourself in new ways. Workout anywhere, any time. Start
                today! Enjoy expert guidance with workout plans for every level
                in FitQuest Training.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Subscription />

      <FeaturesCard />

      <VStack
        bgImage={`url(https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100%"
        spacing={"10px"}
        padding={"20px"}
        marginBottom={"30px"}
      >
        <Text fontSize={"23px"} fontWeight={"bold"} textAlign={"center"} color={"white"}>
          WANT TO BECOME PART OF THE TEAM?
        </Text>
        <HStack>
          <Input type="email" placeholder="Enter email address" value={subscribe} bg={"white"} onChange={(e)=> setSubscribe(e.target.value)} />
          <Button colorScheme="green" width={"200px"} onClick={handleSubscribe}>Subscribe</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HomePage;
