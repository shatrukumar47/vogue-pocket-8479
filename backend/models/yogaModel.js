const mongoose = require('mongoose');

const yogaSchema = new mongoose.Schema({
   title:String,
   url:String,
   calories:Number,
   category:String,
   duration:Number,
   
});

const YogaModel = mongoose.model('YogaModel', yogaSchema);

module.exports = {YogaModel}