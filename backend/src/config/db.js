const mongoose = require("mongoose");

const HOST = process.env.HOST;
const DB_NAME = process.env.DB_NAME;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;
const uri = `mongodb+srv://${USER}:${PASSWORD}@node-rest-shop.jg8pj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  const result = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (mongoose.connection.readyState === 1) {
    console.log("Database is connected.");
  }
};
module.exports = connectDB;
