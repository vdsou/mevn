const express = require("express");
const api = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const index = require("./routes/index");
api.use(cors());
api.use(morgan("dev"));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.use(index);

module.exports = api;
