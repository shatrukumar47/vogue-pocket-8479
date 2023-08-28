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
import { Link, useNavigate } from "react-router-dom";


export const ProductCard = ({ brand, image, name, price, rating, _id }) => {
  const navigate = useNavigate();
  return (
    <Card
      maxW="sm"
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      className="image-hover"
    >
      <CardBody>
        <Image
          src={image}
          alt={name}
          height={"280px"}
          borderRadius="lg"
          className="image"
          margin={"-10px auto 10px auto"}
          objectFit={"cover"}
        />
        <Link to={`/products/${_id}`} width={"200px"}>
          View Product
        </Link>
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
          <Text marginRight={"100%"} color="green.500" fontSize="xl">
            {`₹${price}`}
          </Text>
          <Box className="rating" alignItems="center">
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
          <Box className="mobilerating">
            {rating}{" "}
            <StarIcon color="red.500" marginLeft={"3px"} marginTop={"5px"} />
          </Box>
        </ButtonGroup>
      </CardFooter>
       
    </Card>
  );
};
