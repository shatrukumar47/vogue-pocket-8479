const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  userid: String,
  dailyData: {
    type: Map,
    of: {
      calories: Number,
      exercise: [
        {
          url: String,
          calories: Number,
        },
      ],
      targetCalories: Number, // Added targetCalories field within dailyData
    },
  },
});

const ExerciseModel = mongoose.model("ExerciseModel", exerciseSchema);

module.exports = { ExerciseModel };
