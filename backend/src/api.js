const express = require("express");
const api = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const index = require("./routes/index");
const connectionDB = require("./config/db")
api.use(cors());
api.use(logger("dev"));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.use(index);

module.exports = { api, connectionDB};
