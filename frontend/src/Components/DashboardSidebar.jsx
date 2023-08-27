import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Box, Button, Divider, FormControl, FormLabel, HStack, Image, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import { FaUserTie, FaChild, FaUserShield, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const DashboardSidebar = ({handleProfileTabs}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tabs, setTabs] = useState({
        profile:false,
        exercise: true,
        TandC: false,
        PP: false,
    });
    const [target,setTarget]=useState("")
    const [targ,setTarg]=useState("")

    useEffect(()=>{
        handleProfileTabs(tabs);
    },[tabs])

    //handleProfile
    const handleProfile = ()=>{
        setTabs({
            ...tabs,
            profile:true,
            exercise: false,
            TandC: false,
            PP: false
        })
    }

    //handleExercises
    const handleExercises = ()=>{
        setTabs({
            ...tabs,
            profile:false,
            exercise: true,
            TandC: false,
            PP: false
        })
    }

    //handlePrivacyPolicy
    const handlePrivacyPolicy = ()=>{
        setTabs({
            ...tabs,
            profile:false,
            exercise: false,
            TandC: false,
            PP: true
        })
    }

    //handleTerms and Conditions
    const handleTermsAndCond = ()=>{
        setTabs({
            ...tabs,
            profile:false,
            exercise: false,
            TandC: true,
            PP: false
        })
    }

    //handleLogout
    const handleLogout = ()=>{
        console.log("logout")
    }

const handleTarget = ()=>{
axios.post("http://localhost:8080/exercise/add",{targetCalories:target})


}

  return (
    <Box width={"400px"} h={"90vh"} bg={"#00163A"} >
        <Box marginBottom={"100px"} border={"1px solid red"} padding={"20px"} color={"white"}>
            <Text>Target : {target?target:2000}</Text>
        <FormControl>
            <FormLabel>Enter </FormLabel>
            <InputGroup>
              <Input
                // bg={"white"}
                type="number"
                placeholder="Enter daily target"
                onChange={(e)=>setTarget(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Button colorScheme='orange' margin={"10px auto"} onClick={handleTarget}>Set Target</Button>
        </Box>

        {/* Profile */}
        <HStack fontSize={"25px"} width={"80%"} m={"auto"} color={"white"} spacing={"20px"}>
            <FaUserTie />
            <Text cursor={"pointer"} _hover={{color:"red"}} onClick={handleProfile} color={tabs?.profile ? "red": "white"}>Profile</Text>
        </HStack>

        <Divider color={"white"} margin={"10px auto"} width={"80%"} />

        {/* Exercises */}
        <HStack fontSize={"25px"} width={"80%"} m={"auto"} color={"white"} spacing={"20px"}>
            <FaChild />
            <Text cursor={"pointer"} _hover={{color:"red"}} onClick={handleExercises} color={tabs?.exercise ? "red": "white"}>Exercises</Text>
        </HStack>

        <Divider color={"white"} margin={"10px auto"} width={"80%"} />

        {/* Privacy Policy */}
        <HStack fontSize={"25px"} width={"80%"} m={"auto"} color={"white"} spacing={"20px"}>
            <FaUserShield />
            <Text cursor={"pointer"} _hover={{color:"red"}} onClick={handlePrivacyPolicy} color={tabs?.PP ? "red": "white"}>Privacy Policy</Text>
        </HStack>

        <Divider color={"white"} margin={"10px auto"} width={"80%"} />

        {/* Terms and Conditions */}
        <HStack fontSize={"25px"} width={"80%"} m={"auto"} color={"white"} spacing={"20px"}>
            <FaFileAlt />
            <Text cursor={"pointer"} _hover={{color:"red"}} onClick={handleTermsAndCond} color={tabs?.TandC ? "red": "white"}>Terms and Conditions</Text>
        </HStack>

        <Divider color={"white"} margin={"10px auto"} width={"80%"} />

         {/* Logout */}
        <HStack fontSize={"25px"} width={"80%"} m={"auto"} color={"white"} spacing={"20px"}>
            <FaSignOutAlt />
            <Text cursor={"pointer"} _hover={{color:"red"}} onClick={onOpen}>Logout</Text>
        </HStack>

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
            <Button onClick={handleLogout} colorScheme='teal' variant='solid' style={{marginRight:"20px"}}>Confirm</Button>
            <Button onClick={onClose} colorScheme='red' variant='outline'>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  )
}

export default DashboardSidebar
