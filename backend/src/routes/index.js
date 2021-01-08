const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello, world!"
    });
});

module.exports = router;