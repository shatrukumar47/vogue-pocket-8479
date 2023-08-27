import { deleteLS, getLS, setLS } from "../../utils/localStorage";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";

const initialState = {
  isLoading: false,
  isAuth: getLS("auth")?.isAuth || false,
  user: getLS("auth")?.username || "",
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
        let user = {
          isAuth: true,
          username: payload?.user,
        }
        setLS("auth", user);
        return {...state, isLoading: false, isAuth: true, user:payload?.user, msg: payload?.msg}
      }else{
        return {...state, isLoading: false, isAuth: false, msg: payload?.msg}
      }
    }
    case LOGIN_REQUEST: {
      return { ...state, isLoading: false, isError: true };
    }

    case LOGOUT_SUCCESS: {
      deleteLS("auth");
      return initialState;
    }
    default:
      return initialState;
  }
};
