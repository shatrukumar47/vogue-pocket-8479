import React, { useEffect, useState } from "react";
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
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  exerciseAddAction,
  exerciseDeleteAction,
  exerciseUpdateAction,
  getExercisesAction,
} from "../Redux/exerciseReducer/action";
import Loading from "./Loading";
import ExerciseAdminCard from "./ExerciseAdminCard";
import Pagination from "./Pagination";

const initialState = {
  title: "",
  url: "",
  calories: "",
  category: "",
  duration: "",
};

const ExreciseAdmin = () => {
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
  const isLoading = useSelector((store) => store.exerciseReducer.isLoading);
  const exercises = useSelector((store) => store.exerciseReducer.exercises);
  const totalPages = useSelector((store) => store.exerciseReducer.totalPages);
  const isError = useSelector((store) => store.exerciseReducer.isError);

  useEffect(() => {
    dispatch(getExercisesAction(page, 8));
  }, [page]);

  //handlePagination
  const handlePageClick = (value) => {
    setPage(value);
  };

  //handleChange
  const handleChange = (e) => {
    let { name, value } = e.target;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //handleDeleteBtn
  const handleDeleteBTN = (id) => {
    dispatch(exerciseDeleteAction(id)).then((res) => {
      toast({
        title: `✅ Exercise deleted successfully with id: ${id}`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "success",
      });
      dispatch(getExercisesAction(page, 8));
    });
  };

  //handleEditBTN
  const handleEditBTN = (item) => {
    setItem((prev) => {
      return { ...prev, ...item };
    });
  };

  //handleCloseBTNonModal
  const handleClose = () => {
    setItem(initialState);
    onClose();
  };

  //handleUpdateModalBTN
  const handleUpdate = () => {
    dispatch(exerciseUpdateAction(item)).then((res) => {
      dispatch(getExercisesAction(page, 8));
      toast({
        title: `✅ Exercise updated successfully with id: ${item._id}`,
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
  const handleAddExercise = () => {
    onOpen();
    setEditBTN(false);
  };

  //handleAddModalBTN
  const handleAdd = () => {
    dispatch(exerciseAddAction(item)).then((res) => {
      dispatch(getExercisesAction(page, 8));
      toast({
        title: `Exercise added successfully ✅`,
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
      <Button colorScheme="green" leftIcon={<AddIcon />} onClick={handleAddExercise}>
        Add Exercise
      </Button>

      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(4, 1fr)"}
        gap={"30px"}
        paddingTop={"20px"}
      >
        {exercises?.map((item) => {
          return (
            <ExerciseAdminCard
              key={item?._id}
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
            {editBTN ? "Make the changes" : "Add new exercise"}
          </ModalHeader>
          <ModalCloseButton color={"white"} onClick={handleClose} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                name="title"
                value={item?.title}
                onChange={handleChange}
                placeholder="Title of the Exercise"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Video URL</FormLabel>
              <Input
                type="text"
                name="url"
                value={item?.url}
                onChange={handleChange}
                placeholder="Video URL"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Calories</FormLabel>
              <Input
                type="number"
                name="calories"
                value={item?.calories}
                onChange={handleChange}
                placeholder="Calories"
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
              <FormLabel>Duration in minutes</FormLabel>
              <Input
                type="number"
                name="duration"
                value={item?.duration}
                onChange={handleChange}
                placeholder="Duration"
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

export default ExreciseAdmin;
