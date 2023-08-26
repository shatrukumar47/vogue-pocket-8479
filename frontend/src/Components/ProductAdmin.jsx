import { Box, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {AddIcon} from "@chakra-ui/icons";
import AdminCard from './AdminCard';
import {useDispatch, useSelector} from "react-redux";
import { getProductAction } from '../Redux/productReducer/action';

const ProductAdmin = ({onOpen}) => {

  //Redux Store
  const dispatch = useDispatch();
  const isLoading = useSelector((store)=> store.productReducer.isLoading);
  const data = useSelector((store)=> store.productReducer.data);
  const isError = useSelector((store)=> store.productReducer.isError);

  useEffect(()=>{
    dispatch(getProductAction());
  }, [])

  console.log(data)

  return (
    <Box textAlign={"center"}>
      <Button colorScheme='green' leftIcon={<AddIcon />} onClick={onOpen}>Add Product</Button>
      <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"} gap={"10px"} paddingTop={"20px"}>
        {
          data?.map((item)=>{
            return <AdminCard key={item._id} item={item} />
          })
        }
      </Box>
    </Box>
  )
}

export default ProductAdmin
