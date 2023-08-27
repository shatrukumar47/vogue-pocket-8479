import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import {
  RequestAction,
  RequestError,
  RequestSuccess,
} from "../Redux/productReducer/action";
import {SimpleGrid,Heading} from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { useSearchParams } from "react-router-dom";


const Product = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let Rating=(searchParams.getAll("rating")).map(Number)
  let [totalPage,setTotalPage]=useState(0)
 
  console.log(Rating[Rating.length-1],"Rating")
 
  let paramsObj = {
    params: {
      category: searchParams.getAll("category"),
      brand: searchParams.getAll("brand"),
      rating: Rating[Rating.length-1],
      sort: searchParams.get("sort"),
    },
  };
  const { isLoading, data, isError } = useSelector((store) => {
    return {
      isLoading: store.productReducer.isLoading,
      data: store.productReducer.data,
      isError: store.productReducer.isError,
    };
  }, shallowEqual);

  const FetchData = () => {
    dispatch(RequestAction());
    axios
      .get("http://localhost:8080/products",paramsObj)
      .then((res) => {
        
        // setTotalPage(res.data.data.length)
        dispatch(RequestSuccess(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(RequestError());
      });
  };
  console.log(totalPage)
  useEffect(() => {
    FetchData(paramsObj);
  }, [searchParams]);
  console.log(data);

  if(isLoading){
    return(
    <>
        <Heading as='h4'marginLeft={'40px'} size='lg'>Loading...</Heading>
      <img style={{margin:'auto'}} src='https://i.pinimg.com/originals/8a/6b/19/8a6b1994f66c2d5e6967ad1655300762.gif'></img>
      
    </>
    )
  }

  return (
    <>
      <SimpleGrid width={'95%'} margin={'auto'} spacing={8} columns={{ sm: 1, md: 2, lg: 3 }}>
        {data.map((ele) => (
          <ProductCard {...ele}/>
        ))}
      </SimpleGrid> 
    </>
  );
};

export default Product;
