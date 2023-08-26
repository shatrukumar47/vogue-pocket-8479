import React from "react";
import { Box, Button, Container, Tabs, TabList, Tab, TabPanels, TabPanel, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import ProductAdmin from "../Components/ProductAdmin";
import ExreciseAdmin from "../Components/ExreciseAdmin";

const AdminPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  return (
    <Box>
      <Container maxW={"8xl"} paddingTop={"30px"} borderLeft={"1px solid gray"} borderRight={"1px solid gray"}>
        <Tabs variant="enclosed" colorScheme="black">
          <TabList bg={"#00163A"} color={"white"} padding={"10px 5px 0px 2px"} width={"100%"} borderRadius={"10px 10px 0px 0px"}>
            <Tab fontWeight={"bold"}>Products</Tab>
            <Tab fontWeight={"bold"}>Exercises</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ProductAdmin onOpen={onOpen} />
            </TabPanel>
            <TabPanel>
              <ExreciseAdmin />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminPage;
