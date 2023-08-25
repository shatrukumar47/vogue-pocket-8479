import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";
import { productReducer } from "./productReducer/productReducer";
import { exerciseReducer } from "./exerciseReducer/exerciseReducer";



const rootReducer = combineReducers({
    authReducer,
    productReducer,
    exerciseReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))