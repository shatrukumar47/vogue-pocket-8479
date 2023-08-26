import React from "react";
import { Sidebar } from "../Components/Sidebar";
import Product from "../Components/Product";
import "./ProductPage.css"

export const ProductPage = () => {
  return (
    <div id="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="product">
        <Product />
      </div>
    </div>
  );
};
