const mongoose = require("mongoose");
const Users = require("../models/users");

exports.insertUser = (req, res) => {
  const name = req.body.name.toString();
  const email = req.body.email.toString();
  const password = req.body.password.toString();
  //   const date = req.body.date.toString();
  const date = Date().now;
  user = new Users({
    _id: mongoose.Types.ObjectId(),
    name,
    email,
    password,
    date,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "insert a user",
        success: true,
        user: {
          id: result.id,
          name: result.name,
          email: result.email,
          password: result.password,
          date: result.date,
        },
      });
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({
        message: "insert A user",
        success: false,
        error: err,
      });
    });
};

exports.getAllUsers = (req, res) => {
  Users.find()
    .select("id name email password date ")
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "get all users",
        success: true,
        total: result.length,
        result,
      });
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({
        message: "get all user",
        success: false,
        error: err,
      });
    });
};

exports.getUser = (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  Users.find({ _id: userId })
    .select("id name email password date")
    .exec()
    .then((result) => {
      if (result.length == 0) {
        return res.status(404).json({
          message: "User not found",
          success: false,
          result,
        });
      } else {
        console.log("Error: user not found in the database");
        return res.status(200).json({
          message: "get user",
          success: true,
          result,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
      return res.status(500).json({
        message: "get user",
        success: false,
        error: err,
      });
    });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const updates = {};
  for (const key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      const element = req.body[key];
      updates[key] = element;
    }
  }
  Users.findByIdAndUpdate({ _id: userId }, { $set: updates })
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "update user",
          success: true,
          result,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).json({
        message: "update user",
        success: false,
        error: err,
      });
    });
};
