import { deleteLS, getLS, setLS } from "../../utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isAuth: getLS("auth")?.isAuth || false,
  user: getLS("auth")?.username || "",
  msg: "",
  userid: getLS("auth")?.userid || "",
  userDetails: getLS("auth")?.userDetails || {},
  isAdmin: getLS("auth")?.isAdmin || false,
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      if (payload?.accessToken) {
        let user = {
          isAuth: true,
          username: payload?.username,
          userid: payload?.userid,
          userDetails: payload?.user,
          isAdmin: payload?.isAdmin,
        };
        setLS("auth", user);
        return {
          ...state,
          isLoading: false,
          isAuth: getLS("auth")?.isAuth,
          user: getLS("auth")?.username || payload?.user,
          msg: payload?.msg,
          userid: getLS("auth")?.userid || payload?.userid,
          userDetails: getLS("auth")?.userDetails || payload?.user,
          isAdmin: getLS("auth")?.isAdmin || payload?.isAdmin,
        };
      } else {
        return { ...state, isLoading: false, isAuth: false, msg: payload?.msg };
      }
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case LOGOUT_SUCCESS: {
      deleteLS("auth");
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: "",
        msg: "",
        userid: "",
        isAdmin: false,
        isError: false,
      };
    }
    default:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: "",
        msg: "",
        userid: "",
        isAdmin: false,
        isError: false,
      };
  }
};
