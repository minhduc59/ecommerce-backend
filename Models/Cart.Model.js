const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },

      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

const CartModel = mongoose.model("Cart", cartSchema);

module.exports = {
  CartModel: CartModel,
};
