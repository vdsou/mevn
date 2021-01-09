const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello, world!",
  });
});

router.get("/api/words/getall", (req, res) => {
  res.status(200).json({ message: "get all words from the user" });
});
router.post("/api/words/insert", (req, res) => {
  res.status(201).json({ message: "insert a new word" });
});
router.get("/api/words/get/:word", (req, res) => {
  res.status(200).json({ message: "find a word" });
});
router.put("/api/words/update/:word", (req, res) => {
  res.status(200).json({ message: "update the word and the meaning" });
});
router.delete("/api/words/delete/:word", (req, res) => {
  res.status(200).json({ message: "delete a word" });
});

module.exports = router;
