import {
  PRODUCT_ADD_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_UPDATE_SUCCESS,
} from "../actionTypes";
import axios from "axios";

//GET Product
export const getProductAction =(page = 1, limit = 12) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    axios
      .get(`http://localhost:8080/products?page=${page}&limit=${limit}`)
      .then((res) => {
        dispatch({ type: PRODUCT_SUCCESS, payload: res?.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ PRODUCT_FAILURE });
      });
};

//AddProduct
export const productAddAction = (product) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .post("http://localhost:8080/products/addProduct", product)
    .then((res) => {
      console.log(res);
      dispatch({ type: PRODUCT_ADD_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ PRODUCT_FAILURE });
    });
};

//UPDATE/PATCH Product
export const productUpdateAction = (item) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:8080/products/update/${item?._id}`, item)
    .then((res) => {
      dispatch({ type: PRODUCT_UPDATE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ PRODUCT_FAILURE });
    });
};

//DELETE Product
export const productDeleteAction = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .delete(`http://localhost:8080/products/delete/${id}`)
    .then((res) => {
      dispatch({ type: PRODUCT_DELETE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ PRODUCT_FAILURE });
    });
};
