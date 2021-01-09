const express = require("express");
const router = express.Router();
const words = require("./words")
const users = require("./users")
const api = express();

api.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello, world!",
  });
});
api.use("/api/words/", words);
api.use("/api/users/", users);


module.exports = api;
