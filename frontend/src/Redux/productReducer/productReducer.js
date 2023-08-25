import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../actionTypes"



const initialState = {
    isLoading: false, 
    data: [],
    isError: false
}

export const productReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case PRODUCT_REQUEST:{
            return {...state, isLoading: true}
        }
        case PRODUCT_SUCCESS:{
            return {...state, isLoading: false, data: payload}
        }
        case PRODUCT_FAILURE:{
            return {...state, isLoading: false, isError: true}
        }
        default:
            return initialState
    }
}