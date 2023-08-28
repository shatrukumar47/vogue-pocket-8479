import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getLS } from "../utils/localStorage";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  
  //Local Storage
  const isAuth = getLS("auth")?.isAuth || false;

  if (!isAuth) {
    return (
      <Navigate
        to={{ pathname: "/login", state: { from: location } }}
        replace={true}
      />
    );
  }

  return children;
};

export default PrivateRoute;
