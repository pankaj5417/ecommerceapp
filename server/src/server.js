const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productController = require("./controllers/product.controller");
var cors = require("cors");

require("dotenv").config();
const port=process.env.port||8000
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log(err);
  } else console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/products", productController);

app.listen(port, () => {
  console.log("server is running");
});

module.exports = app;