const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productController = require("./controllers/product.controller");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log(err);
  } else console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/products", productController);

app.listen(8000, () => {
  console.log("server is running");
});

module.exports = app;