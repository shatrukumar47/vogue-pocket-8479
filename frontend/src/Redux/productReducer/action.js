import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../actionTypes"

export let RequestAction=()=>{
  return {type:PRODUCT_REQUEST}
}

export let RequestSuccess=(payload)=>{
  return {type:PRODUCT_SUCCESS,payload}
}

export let RequestError=()=>{
  return {type:PRODUCT_FAILURE}
}