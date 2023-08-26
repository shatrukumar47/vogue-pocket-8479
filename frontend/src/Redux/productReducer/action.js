import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../actionTypes";
import axios from "axios";

export const getProductAction = ()=>(dispatch)=>{
  dispatch({type: PRODUCT_REQUEST});
  axios.get("http://localhost:8080/products").then((res)=>{
    console.log(res)
    dispatch({type: PRODUCT_SUCCESS, payload: res?.data?.data})
  }).catch((error)=>{
    console.log(error);
    dispatch({PRODUCT_FAILURE})
  })
}

// export let RequestSuccess=(payload)=>{
//   return {type:PRODUCT_SUCCESS,payload}
// }

// export let RequestError=()=>{
//   return {type:PRODUCT_FAILURE}
// }