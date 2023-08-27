import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import { ProductPage } from "../Pages/ProductPage";
import AdminPage from "../Pages/AdminPage";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/admin" element={
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
      } />
    </Routes>
  );
};

export default MainRoutes;
