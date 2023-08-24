const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
    blacklist:{type:[String],require:true}
})

const blacklistModel = mongoose.model("blacklist",blacklistSchema);

module.exports= blacklistModel;