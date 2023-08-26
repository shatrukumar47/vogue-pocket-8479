import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const FeaturesCard = () => {
  return (
    <Box margin={"50px 0px"}>
      <Container maxW={"6xl"} padding={"30px 0px"}>
        <HStack spacing={"50px"} marginBottom={"60px"}>
          <Box spacing={"20px"}>
            <HStack spacing={"15px"}>
              <Image
                w={"50px"}
                src="https://img.freepik.com/free-vector/heart-shaped-stethoscope-listening-heart_78370-963.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais"
              />
              <Text fontSize={"25px"}>FITNESS ASSESSMENT</Text>
            </HStack>
            <Text marginTop={"20px"} textAlign={"left"} color={"gray.500"}>
              Your expert coach will take you through an assessment in order to
              create your personal plan for success. Whether you're a beginner
              or an experienced athlete, we have a coach for you.
            </Text>
          </Box>

          <Box spacing={"20px"}>
            <HStack spacing={"15px"}>
              <Image
                w={"50px"}
                src="https://img.freepik.com/free-vector/healthy-food-illustration_24877-52322.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais"
              />
              <Text fontSize={"25px"}>NUTRITIONAL SUCCESS</Text>
            </HStack>
            <Text marginTop={"20px"} textAlign={"left"} color={"gray.500"}>
              You'll get a personalized nutrition plan built specifically for
              your needs. No more guesswork, no more stress. You'll learn how to
              eat on your own terms while establishing healthy habits.
            </Text>
          </Box>
        </HStack>

        <HStack spacing={"20px"}>
          <Box spacing={"20px"}>
            <HStack spacing={"15px"}>
              <Image
                w={"50px"}
                src="https://img.freepik.com/free-vector/flat-online-sport-classes-concept-illustrated_23-2148833190.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais"
              />
              <Text fontSize={"25px"}>WORKOUTS</Text>
            </HStack>
            <Text marginTop={"20px"} textAlign={"left"} color={"gray.500"}>
              We build the workouts for you, you follow them and get results.
              The Fitocracy mobile app will take you through each expert-built
              workout, set by set.
            </Text>
          </Box>

          <Box spacing={"20px"}>
            <HStack spacing={"15px"}>
              <Image
                w={"50px"}
                src="https://img.freepik.com/free-vector/basic-star-flat-vector_78370-1483.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais"
              />
              <Text fontSize={"25px"}>MOTIVATION & ACCOUNTABILITY</Text>
            </HStack>
            <Text marginTop={"20px"} textAlign={"left"} color={"gray.500"}>
              Your coach works with you on a daily basis to keep you motivated
              and on track. They're your secret weapon to hit any goal, no
              matter what it is.
            </Text>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default FeaturesCard;
