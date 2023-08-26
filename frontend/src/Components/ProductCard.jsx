import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  ButtonGroup,
  Stack,
  Image,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./ProductCard.css";
export const ProductCard = ({
  brand,
  category,
  image,
  name,
  price,
  rating,
  id,
}) => {
  // console.log(brand,category,image,name,price,rating)
  return (
    <Card
      maxW="sm"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      className="image-hover"
     
    >
      <CardBody  >
        <Image
          src={image}
          alt={name}
          height={"280px"}
          borderRadius="lg"
          className="image"
          marginTop={"-10px"}
          
        />
        <Button
          width={"200px"}
          colorScheme="gray"
          border={"1px solid black"}
          fontWeight={"bold"}
          color={"red.500"}
          className="hover-button"
        >
          BUY NOW
        </Button>
        <Stack mt="2" spacing="3">
          <Text color={"#00163A"} fontWeight={"semibold"} size="xs">
            {name}
          </Text>
          <Heading color={"#00163A"} size="sm">
            {brand}
          </Heading>
        </Stack>
      </CardBody>
      <Divider marginTop={"-10px"} />
      <CardFooter>
        <ButtonGroup marginTop={"-15px"} marginBottom={"-5px"}>
          <Text marginRight={"140px"} color="green.500" fontSize="xl">
            {`₹ ${price}`}
          </Text>
          <Box display="flex" alignItems="center">
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <StarIcon key={index} color="red.500" />
            ))}
            {5 - Math.floor(rating) > 0 && (
              <StarIcon
                as="span"
                key={Math.floor(rating)}
                color={`rgb(255,51,51,${rating - Math.floor(rating)})`}
              />
            )}
            {Array.from({ length: 5 - Math.floor(rating) - 1 }).map(
              (_, index) => (
                <StarIcon
                  key={Math.floor(rating) + 1 + index}
                  color="gray.300"
                />
              )
            )}
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
