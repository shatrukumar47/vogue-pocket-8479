import axios from "axios";
import {
  EXERCISE_ADD_SUCCESS,
  EXERCISE_DELETE_SUCCESS,
  EXERCISE_FAILURE,
  EXERCISE_REQUEST,
  EXERCISE_SUCCESS,
  EXERCISE_UPDATE_SUCCESS,
} from "../actionTypes";

const baseURL = "https://fair-teal-chipmunk-tam.cyclic.cloud";

//GET Exercise
export const getExercisesAction =
  (page = 1, limit = 8) =>
  (dispatch) => {
    dispatch({ type: EXERCISE_REQUEST });
    axios
      .get(`${baseURL}/yoga?page=${page}&limit=${limit}`)
      .then((res) => {
        dispatch({ type: EXERCISE_SUCCESS, payload: res?.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch(EXERCISE_FAILURE);
      });
  };

//Add Exercise
export const exerciseAddAction = (exercise) => (dispatch) => {
  dispatch({ type: EXERCISE_REQUEST });
  return axios
    .post(`${baseURL}/yoga/add`, exercise)
    .then((res) => {
      dispatch({ type: EXERCISE_ADD_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch(EXERCISE_FAILURE);
    });
};

//UPDATE/PATCH Exercise
export const exerciseUpdateAction = (item) => (dispatch) => {
  dispatch({ type: EXERCISE_REQUEST });
  return axios
    .patch(`${baseURL}/yoga/update/${item?._id}`, item)
    .then((res) => {
      dispatch({ type: EXERCISE_UPDATE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch(EXERCISE_FAILURE);
    });
};

//DELETE Exercise
export const exerciseDeleteAction = (id) => (dispatch) => {
  dispatch({ type: EXERCISE_REQUEST });
  return axios
    .delete(`${baseURL}/yoga/delete/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: EXERCISE_DELETE_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      dispatch(EXERCISE_FAILURE);
    });
};
