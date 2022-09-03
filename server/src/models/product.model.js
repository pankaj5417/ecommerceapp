const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: false },
    gender: { type: String, required: false },

    image_url: { type: String, required: true },

    title: {
      shortTitle: { type: String, required: false },
      longTitle: { type: String, required: false },
    },
    price: {
      mrp: { type: Number, required: true },
      cost: { type: Number, required: true },
      discount: { type: String, required: true },
    },

    description: { type: String, required: false },

    discount: { type: String, required: false },

    tagline: { type: String, required: false },
    rating: { type: Number, required: false },
    reviews: { type: String, required: false },

    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
