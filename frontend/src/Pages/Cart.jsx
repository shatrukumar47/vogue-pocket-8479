import {
  Alert,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Td,
  Image,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {
  const [cartData, setcartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setQuantity] = useState([]);

  let data = JSON.parse(localStorage.getItem("cartdata")) || [];
  async function cartdata() {
    try {
      console.log(data);
      setcartData(data);
      setQuantity(Array(data.length).fill(1));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    cartdata();
  }, []);
  useEffect(() => {
    let newSubtotal = 0;
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i]?.price) {
        newSubtotal += +cartData[i].price * quantity[i];
      }
    }
    setSubtotal(newSubtotal);
  }, [cartData, quantity]);

  const handleIncrement = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index] += 1;
    setQuantity(newQuantity);
  };

  const handleDecrement = (index) => {
    if (quantity[index] > 1) {
      const newQuantity = [...quantity];
      newQuantity[index] -= 1;
      setQuantity(newQuantity);
    }
  };
  const handleDelete = (itemId) => {
    let Filterdata = cartData?.filter((ele) => {
      return ele._id !== itemId;
    });

    setcartData(Filterdata);
    localStorage.setItem("cartdata", JSON.stringify(Filterdata));
  };

  const calculateDiscount = () => {
    if (subtotal >= 1000 && subtotal < 2000) {
      return Math.floor(subtotal * 0.2);
    } else if (subtotal >= 2000 && subtotal < 4000) {
      return Math.floor(subtotal * 0.3);
    } else if (subtotal >= 4000) {
      return Math.floor(subtotal * 0.4);
    } else {
      return Math.floor(subtotal * 0.6);
    }
  };

  const discount = calculateDiscount();
  const deliveryCharge = 100;
  const totalAmount = Math.floor(subtotal - discount + deliveryCharge);

  const Navigate = useNavigate();

  const handleClick = (e) => {
    if (data.length === 0) {
      alert("Your cart is empty");
    } else {
      Navigate(`./checkout`);
    }
  };

  return (
    <>
      <Box p={"2%"}>
        <Heading>Your Shoping Cart</Heading>
        <Box display={"flex"}>
          <Box w={"65%"} overflowY="scroll" height="800px">
            <TableContainer>
              {cartData.length === 0
                ? "EMPTY"
                : `No of Products: ${cartData.length}`}
              <Table variant="simple">
                <Thead gap={"0px"}>
                  <Tr>
                    <Th></Th>
                    <Th>brand</Th>
                    <Th>prcie</Th>
                    <Th>Quantity</Th>
                    <Th>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cartData?.map((e, i) => (
                    <Tr key={e._id}>
                      <Td>
                        <Image src={e.image} alt="" width="80px" />
                      </Td>
                      <Td>{e.brand}</Td>
                      <Td>{e.price}</Td>
                      <Td>
                        <Button onClick={() => handleDecrement(i)}>-</Button>
                        {quantity[i]}
                        <Button onClick={() => handleIncrement(i)}>+</Button>
                      </Td>
                      <Td>{String(e.price * quantity[i])}</Td>
                      <Td>
                        <Button onClick={() => handleDelete(e._id)}>
                          <DeleteIcon />
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box w={"25%"}>
            <Card>
              <CardHeader>
                <Heading size="md">Order Summary</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Sub Total
                      </Heading>
                    </Box>
                    <Box>
                      <Text pt="2" fontSize="sm">
                        ₹ {subtotal}
                      </Text>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Discount
                      </Heading>
                    </Box>
                    <Box>
                      <Text pt="2" fontSize="sm">
                        ₹ {discount}
                      </Text>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Delivery Fee
                      </Heading>
                    </Box>
                    <Box>
                      <Text pt="2" fontSize="sm">
                        ₹ {deliveryCharge}
                      </Text>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Total
                      </Heading>
                    </Box>
                    <Box>
                      <Text pt="2" fontSize="sm">
                        ₹ {totalAmount}
                      </Text>
                    </Box>
                  </Box>
                </Stack>
                <Button onClick={handleClick} bg={"black"} color={"white"}>
                  Checkout
                </Button>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Cart;
