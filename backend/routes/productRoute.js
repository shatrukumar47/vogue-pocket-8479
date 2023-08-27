const express = require("express");
const { ProductModel } = require("../models/ProductModel");

const productRoute = express.Router();

// GET REQUEST FOR ALL PRODUCTS
productRoute.get("/", async (req, res) => {
  let q = {};
  let s = {};
  
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit);

  if (req.query.category) {
    q.category = req.query.category;
  }
  if (req.query.brand) {
    q.brand = req.query.brand;
  }
  if (req.query.rating) {
    q.rating = { $gte: req.query.rating };
  }
  if (req.query.sort) {
    if (req.query.sort === "asc") {
      s.price = 1;
    } else if (req.query.sort === "desc") {
      s.price = -1;
    }
  }

  try {
    //Pagination
    const totalProducts = await ProductModel.countDocuments(q);
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await ProductModel.find(q).sort(s).skip((page - 1) * limit).limit(limit);
    res.status(200).json({ page: page, totalPages: totalPages, data: products });
    
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// POST REQUEST TO ADD A NEW PRODUCT
productRoute.post("/addProduct", async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).send({ msg: "New Product added successfully" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// PATCH REQUEST FOR EDITING EXISTING PRODUCT
productRoute.patch("/update/:productID", async (req, res) => {
  try {
    const { productID } = req.params;
    await ProductModel.findByIdAndUpdate({ _id: productID }, req.body);
    res.status(200).send({
      msg: `Product with id ${productID} is updated successfully`,
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// DELETE REQUEST FOR DELETING PRODUCT
productRoute.delete("/delete/:productID", async (req, res) => {
  try {
    const { productID } = req.params;
    // console.log(productID)
    await ProductModel.findByIdAndDelete({ _id: productID });
    res.status(200).send({
      msg: `Product with id ${productID} is deleted successfully`,
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  productRoute,
};
