import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {AddIcon} from "@chakra-ui/icons";
import AdminCard from './AdminCard';

const ProductAdmin = ({onOpen}) => {
  return (
    <Box>
      <Button colorScheme='green' leftIcon={<AddIcon />} onClick={onOpen}>Add Product</Button>
      <Box>
        <AdminCard />
      </Box>
    </Box>
  )
}

export default ProductAdmin
