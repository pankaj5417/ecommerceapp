const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = req.user;

    const product = await Product.create(req.body);

    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.send(products);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id }).lean().exec();
    // const product = await Product.findById(req.params.id).lean().exec();

    return res.send(product);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

module.exports = router;
