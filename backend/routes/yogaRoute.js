const express = require("express");
const { YogaModel } = require("../models/yogaModel");

const yogaRoute = express.Router();

/**
 * GET request to fetch all yoga data.
 
 */
yogaRoute.get("/", async (req, res) => {
  try {
    //Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;

    const totalCount = await YogaModel.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);

    if (page > totalPages) {
      return res.status(400).json({ error: "Invalid page number" });
    }

    //Fetch
    const data = await YogaModel.find().skip(skip).limit(limit);
    res.status(200).send({ data, totalPages });
  } catch (error) {
    res.status(500).send({ error: "An error occurred while fetching data" });
  }
});

/**
 * POST request to add new yoga data.
 
 */
yogaRoute.post("/add", async (req, res) => {
  try {
    // Create a new YogaModel instance with the data from the request body
    const newData = new YogaModel(req.body);
    // Save the new data to the database
    await newData.save();
    // Send a success response
    res.status(200).send({ msg: "Data saved successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: "An error occurred while saving data" });
  }
});

/**
 * PATCH request to update existing yoga data.

 */
yogaRoute.patch("/update/:id", async (req, res) => {
  try {
    // Extract the ID from the request parameters
    const { id } = req.params;
    // Update the data with the provided ID using the request body
    await YogaModel.findByIdAndUpdate(id, req.body);
    // Send a success response
    res.status(200).send({ msg: "Data updated successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: "An error occurred while updating data" });
  }
});

/**
 * DELETE request to delete yoga data.

 */
yogaRoute.delete("/delete/:id", async (req, res) => {
  try {
    // Extract the ID from the request parameters
    const { id } = req.params;
    // Find and delete the data with the provided ID
    await YogaModel.findByIdAndDelete(id);
    // Send a success response
    res.status(200).send({ msg: "Data deleted successfully" });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({ error: "An error occurred while deleting data" });
  }
});

module.exports = { yogaRoute };
