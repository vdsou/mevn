const express = require("express");
const router = express.Router();
router.get("/getall", (req, res) => {
    res.status(200).json({ message: "get all words from the user" });
  });
  router.post("/insert", (req, res) => {
    res.status(201).json({ message: "insert a new word" });
  });
  router.get("/get/:word", (req, res) => {
    res.status(200).json({ message: "find a word" });
  });
  router.put("/update/:word", (req, res) => {
    res.status(200).json({ message: "update the word and the meaning" });
  });
  router.delete("/delete/:word", (req, res) => {
    res.status(200).json({ message: "delete a word" });
  });
  
  module.exports = router