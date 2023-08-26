import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
import axios from "axios";




export const login = (user)=>(dispatch) => {
    dispatch({type:LOGIN_REQUEST})
   return axios.post(`http://localhost:8080/users/login`,user).then((res)=>{
      dispatch({type:LOGIN_SUCCESS,payload:res.data})
      console.log(res.data)
    }).catch((err)=>{
      dispatch({type:LOGIN_FAILURE})
    })
  };