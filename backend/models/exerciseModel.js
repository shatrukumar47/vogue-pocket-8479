const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    userID: String,
    dailyData: {
        type: Map,
        of: {
            calories: Number,
            exercise: [String],
            targetCalories: Number // Added targetCalories field within dailyData
        }
    }
});

const ExerciseModel = mongoose.model('ExerciseModel', exerciseSchema);

module.exports = {ExerciseModel}

