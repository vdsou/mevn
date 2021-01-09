const express = require("express");
const router = express.Router();
const wordsControoler = require("../controllers/words");
console.log(wordsControoler);

router.get("/getall", wordsControoler.getAllWords);

router.post("/insert", wordsControoler.insertWord);

router.get("/get/:word", (req, res) => {
  res.status(200).json({ message: "find a word" });
});
router.patch("/update/:id", wordsControoler.updateWord);

router.delete("/delete/:id", wordsControoler.deleteWord);

module.exports = router;
