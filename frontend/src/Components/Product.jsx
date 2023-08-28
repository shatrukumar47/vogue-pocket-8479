import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../Redux/actionTypes";
import Loading from "./Loading";

const Product = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let Rating = searchParams.getAll("rating").map(Number);

  let paramsObj = {
    params: {
      category: searchParams.getAll("category"),
      brand: searchParams.getAll("brand"),
      rating: Rating[Rating.length - 1],
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
    dispatch({ type: PRODUCT_REQUEST });
    axios
      .get("https://fair-teal-chipmunk-tam.cyclic.cloud/products", paramsObj)
      .then((res) => {
        dispatch({ type: PRODUCT_SUCCESS, payload: res?.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };

  useEffect(() => {
    FetchData(paramsObj);
  }, [searchParams]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SimpleGrid
        width={"96%"}
        margin={"auto"}
        spacing={3}
        columns={{ sm: 1, md: 2, lg: 3 }}
      >
        {data?.map((ele) => (
          <ProductCard key={ele?._id} {...ele} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Product;
