import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaUserTie,
  FaChild,
  FaUserShield,
  FaFileAlt,
  FaSignOutAlt,
  FaRecordVinyl,
} from "react-icons/fa";
import dashboardAnime from "../Images/dashboardAnime.gif";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../Redux/authReducer/action";

const DashboardSidebar = ({ handleProfileTabs }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabs, setTabs] = useState({
    profile: false,
    exercise: true,
    TandC: false,
    PP: false,
    records: false,
  });
  const [target, setTarget] = useState(2000);

  //Redux
  const dispatch = useDispatch();
  const userid = useSelector((store) => store.authReducer.userid);

  useEffect(() => {
    handleProfileTabs(tabs);
  }, [tabs]);

  //handleProfile
  const handleProfile = () => {
    setTabs({
      ...tabs,
      profile: true,
      exercise: false,
      TandC: false,
      PP: false,
      records: false,
    });
  };

  //handleExercises
  const handleExercises = () => {
    setTabs({
      ...tabs,
      profile: false,
      exercise: true,
      TandC: false,
      PP: false,
      records: false,
    });
  };

  //handlePrivacyPolicy
  const handlePrivacyPolicy = () => {
    setTabs({
      ...tabs,
      profile: false,
      exercise: false,
      TandC: false,
      PP: true,
      records: false,
    });
  };

  //handleTerms and Conditions
  const handleTermsAndCond = () => {
    setTabs({
      ...tabs,
      profile: false,
      exercise: false,
      TandC: true,
      PP: false,
      records: false,
    });
  };

  //handleRecords
  const handleRecords = () => {
    setTabs({
      ...tabs,
      profile: false,
      exercise: false,
      TandC: false,
      PP: false,
      records: true,
    });
  };

  //handleLogout
  const handleLogout = () => {
    navigate("/");
    dispatch(Logout());
  };

  const handleTarget = () => {
    axios.post("https://fair-teal-chipmunk-tam.cyclic.cloud/exercise/add", {
      targetCalories: target,
      userid,
    });
  };

  return (
    <Box width={"400px"} h={"830px"} bg={"#028091"}>
      <Box margin={"30px auto 30px auto"} padding={"20px"} color={"white"}>
        <HStack justifyContent={"space-between"} padding={"10px"}>
          <Text fontWeight={"bold"} fontSize={"18px"} color={"lightgreen"}>
            🎯 Target : {target ? target : 0}
          </Text>
          <Button colorScheme="orange" onClick={handleTarget}>
            Set Target
          </Button>
        </HStack>
        <FormControl marginTop={"20px"}>
          <FormLabel>Fill Target</FormLabel>
          <InputGroup>
            <Input
              type="number"
              value={target}
              _placeholder={{
                color: "skyblue",
              }}
              placeholder="Enter daily target"
              onChange={(e) => setTarget(e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </Box>

      {/* Profile */}
      <HStack
        fontSize={"22px"}
        width={"80%"}
        m={"auto"}
        color={"white"}
        spacing={"20px"}
      >
        <FaUserTie />
        <Text
          cursor={"pointer"}
          _hover={{ color: "#00163A" }}
          onClick={handleProfile}
          color={tabs?.profile ? "#00163A" : "white"}
        >
          Profile
        </Text>
      </HStack>

      <Divider color={"white"} margin={"10px auto"} width={"80%"} />

      {/* Exercises */}
      <HStack
        fontSize={"22px"}
        width={"80%"}
        m={"auto"}
        color={"white"}
        spacing={"20px"}
      >
        <FaChild />
        <Text
          cursor={"pointer"}
          _hover={{ color: "#00163A" }}
          onClick={handleExercises}
          color={tabs?.exercise ? "#00163A" : "white"}
        >
          Exercises
        </Text>
      </HStack>

      <Divider color={"white"} margin={"10px auto"} width={"80%"} />

      {/* Records */}
      <HStack
        fontSize={"22px"}
        width={"80%"}
        m={"auto"}
        color={"white"}
        spacing={"20px"}
      >
        <FaRecordVinyl />
        <Text
          cursor={"pointer"}
          _hover={{ color: "#00163A" }}
          onClick={handleRecords}
          color={tabs?.records ? "#00163A" : "white"}
        >
          Records
        </Text>
      </HStack>

      <Divider color={"white"} margin={"10px auto"} width={"80%"} />

      {/* Privacy Policy */}
      <HStack
        fontSize={"22px"}
        width={"80%"}
        m={"auto"}
        color={"white"}
        spacing={"20px"}
      >
        <FaUserShield />
        <Text
          cursor={"pointer"}
          _hover={{ color: "#00163A" }}
          onClick={handlePrivacyPolicy}
          color={tabs?.PP ? "#00163A" : "white"}
        >
          Privacy Policy
        </Text>
      </HStack>

      <Divider color={"white"} margin={"10px auto"} width={"80%"} />

      {/* Terms and Conditions */}
      <HStack
        fontSize={"22px"}
        width={"80%"}
        m={"auto"}
        color={"white"}
        spacing={"20px"}
      >
        <FaFileAlt />
        <Text
          cursor={"pointer"}
          _hover={{ color: "#00163A" }}
          onClick={handleTermsAndCond}
          color={tabs?.TandC ? "#00163A" : "white"}
        >
          Terms and Conditions
        </Text>
      </HStack>

      <Divider color={"white"} margin={"10px auto"} width={"80%"} />

      {/* Logout */}
      <HStack
        fontSize={"22px"}
        width={"80%"}
        m={"auto"}
        color={"white"}
        spacing={"20px"}
      >
        <FaSignOutAlt />
        <Text cursor={"pointer"} _hover={{ color: "#00163A" }} onClick={onOpen}>
          Logout
        </Text>
      </HStack>

      <Image src={dashboardAnime} width={"100%"} />

      {/* Logout Modal */}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to sign out ? </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleLogout}
              colorScheme="teal"
              variant="solid"
              style={{ marginRight: "20px" }}
            >
              Confirm
            </Button>
            <Button onClick={onClose} colorScheme="#00163A" variant="outline">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DashboardSidebar;
