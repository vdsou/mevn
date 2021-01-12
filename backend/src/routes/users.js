const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/getall", userController.getAllUsers);

router.post("/insert", userController.insertUser);

router.get("/get/:id", userController.getUser);

router.patch("/update/:id", userController.updateUser);

router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
