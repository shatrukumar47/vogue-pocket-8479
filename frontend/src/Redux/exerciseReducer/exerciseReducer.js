import { EXERCISE_ADD_SUCCESS, EXERCISE_DELETE_SUCCESS, EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESS, EXERCISE_UPDATE_SUCCESS } from "../actionTypes"

const initialState = {
    isLoading: false, 
    exercises: [],
    totalPages : "",
    isError: false
}

export const exerciseReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case EXERCISE_REQUEST:{
            return {...state, isLoading: true}
        }
        case EXERCISE_SUCCESS:{
            return {...state, isLoading: false, exercises: payload?.data, totalPages: payload?.totalPages}
        }
        case EXERCISE_FAILURE:{
            return {...state, isLoading: false, isError: true}
        }
        case EXERCISE_DELETE_SUCCESS:{
            return {...state, isLoading: false}
        }
        case EXERCISE_UPDATE_SUCCESS:{
            return {...state, isLoading: false}
        }
        case EXERCISE_ADD_SUCCESS:{
            return {...state, isLoading: false}
        }
        default:
            return initialState
    }
}