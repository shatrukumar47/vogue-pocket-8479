import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import AdminCard from "./AdminCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAction,
  productAddAction,
  productDeleteAction,
  productUpdateAction,
} from "../Redux/productReducer/action";
import Pagination from "./Pagination";
import Loading from "./Loading";

const initialState = {
  name: "",
  brand: "",
  price: "",
  category: "",
  rating: "",
  image: "",
};

const ProductAdmin = () => {
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(initialState);
  const [editBTN, setEditBTN] = useState(false);

  //Edit Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //Toast Feature
  const toast = useToast();
  const positions = ["top"];

  //Redux Store
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.productReducer.isLoading);
  const data = useSelector((store) => store.productReducer.data);
  const totalPages = useSelector((store) => store.productReducer.totalPages);
  const isError = useSelector((store) => store.productReducer.isError);

  

  useEffect(() => {
    dispatch(getProductAction(page, 12));
  }, [page]);

  //handlePagination
  const handlePageClick = (value) => {
    setPage(value);
  };

  //handleDeleteBtn
  const handleDeleteBTN = (id) => {
    dispatch(productDeleteAction(id)).then((res) => {
      toast({
        title: `✅ Product deleted successfully with id: ${id}`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "success",
      });
      dispatch(getProductAction(page, 12));
    });
  };

  //handleEditBTN
  const handleEditBTN = (item) => {
    setItem((prev) => {
      return { ...prev, ...item };
    });
  };

  //handleChange
  const handleChange = (e) => {
    let { name, value } = e.target;
    // value = name==="price"? parseInt(value) : name==="rating"? parseInt(value) : value;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //handleCloseBTNonModal
  const handleClose = () => {
    setItem(initialState);
    onClose();
  };

  //handleUpdateModalBTN
  const handleUpdate = () => {
    dispatch(productUpdateAction(item)).then((res) => {
      dispatch(getProductAction(page, 12));
      toast({
        title: `✅ Product updated successfully with id: ${item._id}`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "success",
      });
      setItem(initialState);
      onClose();
    });
  };

  //handleAddProductBTN
  const handleAddProduct = () => {
    onOpen();
    setEditBTN(false);
  };

  //handleAddModalBTN
  const handleAdd = () => {
    dispatch(productAddAction(item)).then((res) => {
      dispatch(getProductAction(page, 12));
      toast({
        title: `Product added successfully ✅`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "success",
      });
      setItem(initialState);
      onClose();
    });
  };

  //Loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box textAlign={"center"} minH={"90vh"}>
      <Button
        colorScheme="green"
        marginBottom={"20px"}
        leftIcon={<AddIcon />}
        onClick={handleAddProduct}
      >
        Add Product
      </Button>

      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(4, 1fr)"}
        gap={"30px"}
        paddingTop={"20px"}
      >
        {data?.map((item) => {
          return (
            <AdminCard
              key={item._id}
              item={item}
              handleDeleteBTN={handleDeleteBTN}
              handleEditBTN={handleEditBTN}
              onOpen={onOpen}
              setEditBTN={setEditBTN}
            />
          );
        })}
      </Box>
      {/* Pagination */}
      <Container
        maxW={"4xl"}
        margin={"50px auto"}
        borderTop={"1px solid black"}
        borderBottom={"1px solid black"}
        padding={"30px"}
      >
        <Pagination
          totalPages={totalPages}
          handlePageClick={handlePageClick}
          page={page}
        />
      </Container>

      {/* Edit Modal/Add Modal */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#00163A"} color={"white"}>
          {editBTN ? "Make the changes" : "Add new product"}
          </ModalHeader>
          <ModalCloseButton color={"white"} onClick={handleClose} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                name="name"
                value={item?.name}
                onChange={handleChange}
                placeholder="Product Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Brand</FormLabel>
              <Input
                type="text"
                name="brand"
                value={item?.brand}
                onChange={handleChange}
                placeholder="Brand"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                type="text"
                name="price"
                value={item?.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                name="category"
                value={item?.category}
                onChange={handleChange}
                placeholder="Category"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input
                type="number"
                name="rating"
                value={item?.rating}
                onChange={handleChange}
                placeholder="Rating"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                name="image"
                value={item?.image}
                onChange={handleChange}
                placeholder="Image URL"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {editBTN ? (
              <Button colorScheme="green" mr={3} onClick={handleUpdate}>
                Update
              </Button>
            ) : (
              <Button colorScheme="green" mr={3} onClick={handleAdd}>
                Add
              </Button>
            )}
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductAdmin;
