const mongoose = require("mongoose");
const Words = require("../models/words");

exports.getAllWords = (req, res) => {
  Words.find()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "get all",
        success: true,
        documents: result.length,
        result,
      });
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({
        message: "get all",
        success: false,
        error: err,
      });
    });
};

exports.getWord = (req, res) => {
  const word = req.params.word;
  Words.find({ word })
    .exec()
    .then((result) => {
      if (result.length == 0) {
        return res.status(404).json({
          message: "Word not found.",
          success: false,
          result,
        });
      }
      return res.status(200).json({
        message: "get word",
        success: true,
        result,
      });
    })
    .catch((err) => {
      console.log("Error:", err);
      return res.status(500).json({
        message: "get word",
        success: false,
        error: err,
      });
    });
};

exports.insertWord = (req, res) => {
  const word = req.body.word.toString();
  const meaning = req.body.meaning.toString();
  const words = new Words({
    _id: mongoose.Types.ObjectId(),
    word,
    meaning,
  });
  words
    .save()
    .then((result) => {
      res.status(201).json({
        message: "insert a word",
        success: true,
        result,
      });
    })
    .catch((err) => {
      if (err) {
        console.log("Error:", err);
        res.status(500).json({
          message: "insert a word",
          success: false,
          error: err,
        });
      }
    });
};

exports.updateWord = (req, res) => {
  const id = req.params.id;

  Words.find({ _id: id })
    .exec()
    .then((result) => {
      if (result.length === 0 || !result) {
        res.status(404).json({
          message: "Not found",
          success: false,
        });
      } else {
        const updates = {};
        for (const key in req.body) {
          if (req.body.hasOwnProperty(key)) {
            updates[key] = req.body[key];
          }
        }
        Words.updateOne({ _id: id }, { $set: updates })
          .exec()
          .then((result) => {
            return res.status(200).json({
              message: "update",
              success: true,
              result,
            });
          })
          .catch((err) => {
            console.log("Error", err);
            return res.status(500).json({
              message: "update",
              success: false,
              error: err,
            });
          });
      }
    }).catch((err) => {
      console.log("Error", err);
      return res.status(500).json({
        message: "update",
        success: false,
        error: err,
      });
    });
};

exports.deleteWord = (req, res) => {
  const id = req.params.id;
  Words.findOneAndDelete({ _id: id })
    .exec()
    .then((result) => {
      if (!result) {
        res.status(404).json({
          message: "Not found",
          success: false,
          deleted: result,
        });  
      }
      res.status(200).json({
        message: "delete",
        success: true,
        deleted: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "delete",
        success: false,
        error: err,
      });
    });
};
