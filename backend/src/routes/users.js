const express = require("express");
const router = express.Router();
router.get("/getall", (req, res) => {
    res.status(200).json({ message: "get all users from the user" });
  });
  router.post("/insert", (req, res) => {
    res.status(201).json({ message: "insert a new user" });
  });
  router.get("/get/:user", (req, res) => {
    res.status(200).json({ message: "find a user" });
  });
  router.put("/update/:user", (req, res) => {
    res.status(200).json({ message: "update the user and the meaning" });
  });
  router.delete("/delete/:user", (req, res) => {
    res.status(200).json({ message: "delete a user" });
  });
  
  module.exports = router