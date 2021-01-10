const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const wordsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  word: { type: String, unique: true },
  meaning: String,
});

module.exports = model("Words", wordsSchema);
