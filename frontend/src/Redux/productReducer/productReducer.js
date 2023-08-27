import { PRODUCT_ADD_SUCCESS, PRODUCT_DELETE_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_UPDATE_SUCCESS } from "../actionTypes"



const initialState = {
    isLoading: false, 
    data: [],
    totalPages: "",
    isError: false
}

export const productReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case PRODUCT_REQUEST:{
            return {...state, isLoading: true}
        }
        case PRODUCT_SUCCESS:{
            return {...state, isLoading: false, data: payload?.data, totalPages: payload?.totalPages}
        }
        case PRODUCT_FAILURE:{
            return {...state, isLoading: false, isError: true}
        }
        case PRODUCT_DELETE_SUCCESS:{
            return {...state, isLoading: false}
        }
        case PRODUCT_UPDATE_SUCCESS:{
            return {...state, isLoading: false}
        }
        case PRODUCT_ADD_SUCCESS:{
            return {...state, isLoading: false}
        }
        default:
            return initialState
    }
}