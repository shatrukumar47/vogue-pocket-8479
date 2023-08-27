import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
import axios from "axios";




export const login = (user)=> async (dispatch) => {
  try {
    dispatch({type:LOGIN_REQUEST})
    try {
      const res = await axios.post(`http://localhost:8080/users/login`,user);
      console.log(res)
      dispatch({type:LOGIN_SUCCESS, payload:res?.data})
      
      return res?.data?.accessToken;
    } catch (error) {
      dispatch({type:LOGIN_FAILURE})
    }
  } catch (error) {
    console.log(error)
  }
};