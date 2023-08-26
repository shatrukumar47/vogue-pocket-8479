import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import {
  RequestAction,
  RequestError,
  RequestSuccess,
} from "../Redux/productReducer/action";
import {
 
  SimpleGrid,

} from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";

const Product = () => {
  const dispatch = useDispatch();
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
      .get("http://localhost:8080/products")
      .then((res) => {
        console.log(res.data.data);
        dispatch(RequestSuccess(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(RequestError());
      });
  };
  useEffect(() => {
    FetchData();
  }, []);

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
