const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.Model;
const wordsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  word: String,
  meaning: String,
});

module.exports = model("Words", wordsSchema);
