const express = require("express");
const { ExerciseModel } = require("../models/exerciseModel");
const authMiddle = require("../middleware/authMiddleware");
const exerciseRouter = express.Router();

//get exercise
exerciseRouter.post("/", async (req, res) => {
  const { userid } = req.body;

  const data = await ExerciseModel.findOne({ userid });
  if (data) {
    res.send({ data: data.dailyData });
  } else {
    res.status(200).send({ msg: "Login Please !!" });
  }
});

// add exercise
exerciseRouter.post("/add", async (req, res) => {
  const { userid, calories, exercise, targetCalories } = req.body;
  console.log(userid);
  try {
    let existingData = await ExerciseModel.findOne({ userid });

    if (existingData) {
      const formattedDate = getFormattedDate(new Date());
      const existingDailyData = existingData.dailyData.get(formattedDate);

      if (existingDailyData) {
        if (exercise) {
          existingDailyData.exercise.push(exercise);
        }

        if (calories) {
          existingDailyData.calories += calories;
        }

        if (targetCalories !== undefined) {
          existingDailyData.targetCalories = targetCalories;
        }
      } else {
        const newData = {
          calories: calories || 0,
          exercise: exercise || [],
          userid,
          targetCalories: targetCalories !== undefined ? targetCalories : 2000,
        };
        existingData.dailyData.set(formattedDate, newData);
      }

      await existingData.save();
    } else {
      const newData = new ExerciseModel({
        userid,
        dailyData: new Map([
          [
            getFormattedDate(new Date()),
            {
              calories: calories || 0,
              exercise: exercise || [],
              targetCalories:
                targetCalories !== undefined ? targetCalories : 2000,
            },
          ],
        ]),
      });
      await newData.save();
    }

    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Function to get formatted date in "YYYY-MM-DD" format
function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

//delete exercise
exerciseRouter.post("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { exerciseId } = req.body; // Assuming you want to remove the specified exercise

    const exerciseDocument = await ExerciseModel.findOne({ userid: id });

    if (!exerciseDocument) {
      return res
        .status(404)
        .json({ success: false, message: "Exercise not found" });
    }

    const formattedDate = getFormattedDate(new Date()); // Pass the current date
    const exerciseArray =
      exerciseDocument.dailyData.get(formattedDate).exercise;
    let exercise = exerciseArray.filter((el) => el._id == exerciseId)[0];

    const caloriesBurned =
      exerciseDocument.dailyData.get(formattedDate).calories -
      exercise.calories;
    // Update the exercise array in the document and save it
    exerciseDocument.dailyData.get(formattedDate).calories = caloriesBurned;
    exerciseArray.splice(
      exerciseArray.findIndex((a) => a._id === exercise._id),
      1
    );

    exerciseDocument.dailyData.get(formattedDate).exercise = exerciseArray;
    await exerciseDocument.save();

    res.json({ success: true, message: "Exercise deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
});

module.exports = { exerciseRouter };
