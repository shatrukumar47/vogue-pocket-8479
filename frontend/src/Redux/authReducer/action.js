import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";
import axios from "axios";

const baseURL = "https://fair-teal-chipmunk-tam.cyclic.cloud";

//Login
export const login = (user)=> async (dispatch) => {
  try {
    dispatch({type:LOGIN_REQUEST})
    try {
      const res = await axios.post(`${baseURL}/users/login`,user);
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

//Logout
export const Logout = () => async (dispatch)=>{
  dispatch({type: LOGOUT_SUCCESS});
  // try {
  //   const res = await axios.get(`http://localhost:8080/users/logout`)
  //   console.log(res)
  // } catch (error) {
  //   console.log(error)
  // }
}