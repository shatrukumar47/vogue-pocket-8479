import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"#EFF1F3"}>
      <Container maxW={"7xl"} padding={"30px"} margin={"20px auto 40px auto"}>
        <Text fontSize={"35px"} fontWeight={"bold"} textAlign={"center"}>
          How Much Does It Cost?
        </Text>
        <Text color={"gray.500"} textAlign={"center"}>
          PROFESSIONAL TRAINING FROM THE WORLD’S BEST COACHES STARTS FOR AS
          LITTLE AS ₹999/Month.
        </Text>
        <HStack
          spacing={"20px"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <VStack
            padding={"30px"}
            margin={"20px 0px"}
            width={"500px"}
            h={"590px"}
            justifyContent={"space-between"}
            bg={"white"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            }
            borderRadius={"10px"}
          >
            <Box textAlign={"center"}>
              <Text fontSize={"40px"}>Free</Text>
              <Text fontSize={"13px"}>NO STRINGS</Text>
              <Text as={"span"} fontWeight={"bold"} color={"green"}>
                ₹
              </Text>
              <Text
                as={"span"}
                fontSize={"100px"}
                fontWeight={"bold"}
                color={"green"}
              >
                0
              </Text>
              <List spacing={3} textAlign={"left"}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Get free workouts for any goal and experience level
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Earn points for every workout logged
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Earn badges for unlocking special achievements
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Get support and motivation from the most positive fitness
                  community online
                </ListItem>
              </List>
            </Box>
            <Divider />
            <Button
              colorScheme="blue"
              width={"250px"}
              onClick={() => navigate("/signup")}
            >
              Join Now
            </Button>
          </VStack>

          <Box
            padding={"30px"}
            bg={"white"}
            margin={"20px 0px"}
            borderRadius={"10px"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            }
            textAlign={"center"}
            w={"500px"}
          >
            <Text fontSize={"40px"}>Coaching</Text>
            <Text fontSize={"13px"}>STARTING FROM</Text>
            <Text as={"span"} fontWeight={"bold"} color={"green"}>
              ₹
            </Text>
            <Text
              as={"span"}
              fontSize={"100px"}
              fontWeight={"bold"}
              color={"green"}
            >
              999
            </Text>
            <Text as={"span"} fontWeight={"bold"} color={"green"}>
              / Day
            </Text>
            <List spacing={3} textAlign={"left"}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Get everything included in FitQuest and...
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Select a coach who can help you reach your goals
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Get a customized nutrition plan built for you
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Follow workouts made specifically for you
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Get help from your coach any time you need it
              </ListItem>
            </List>
            <Image
              width={"200px"}
              margin={"auto"}
              src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais"
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Subscription;
