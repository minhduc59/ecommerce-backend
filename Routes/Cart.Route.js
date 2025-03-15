const express = require("express");
const {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
} = require("../Controllers/Cart.Controller");

const { isAuthentication } = require("../Middleware/Authentication");
const CartRoute = express.Router();

CartRoute.get("/cart", isAuthentication, getCart);
CartRoute.port("/cart", isAuthentication, addToCart);
CartRoute.put("/cart", isAuthentication, updateCart);
CartRoute.delete("/cart", isAuthentication, removeFromCart);

module.exports = CartRoute;
