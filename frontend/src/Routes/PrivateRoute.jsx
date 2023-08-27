import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    //Redux
    const isAuth = useSelector((store)=> store.authReducer.isAuth);

    if(!isAuth){
        return <Navigate to={"/login"} state={location?.pathname} required={true} />
    }

  return children
}

export default PrivateRoute
