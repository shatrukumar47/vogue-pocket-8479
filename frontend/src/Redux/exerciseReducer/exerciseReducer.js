import { EXERCISE_FAILURE, EXERCISE_REQUEST, EXERCISE_SUCCESS } from "../actionTypes"

const initialState = {
    isLoading: false, 
    exercises: [],
    isError: false
}

export const exerciseReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case EXERCISE_REQUEST:{
            return {...state, isLoading: true}
        }
        case EXERCISE_SUCCESS:{
            return {...state, isLoading: false, exercises: payload}
        }
        case EXERCISE_FAILURE:{
            return {...state, isLoading: false, isError: true}
        }
        default:
            return initialState
    }
}