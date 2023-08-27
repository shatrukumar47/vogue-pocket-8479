import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initialState = {
  isLoading: false,
  isAuth: false,
  user: "",
  msg: "",
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      if(payload?.accessToken){
        return {...state, isLoading: false, isAuth: true, user:payload?.user, msg: payload?.msg}
      }else{
        return {...state, isLoading: false, isAuth: false, msg: payload?.msg}
      }
    }
    case LOGIN_REQUEST: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return initialState;
  }
};
