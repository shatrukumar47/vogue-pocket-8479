import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import {AddIcon} from "@chakra-ui/icons";


const ExreciseAdmin = () => {
  return (
    <Box>
      <Button colorScheme='green' leftIcon={<AddIcon />} >Add Exercise</Button>
      <Box>
        Exercises
      </Box>
    </Box>
  )
}

export default ExreciseAdmin
