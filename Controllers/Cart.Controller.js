import { CartModel } from "../Models/Cart.Model";
import { ProductModel } from "../Models/Product.Model";
import ErrorHandler from "../Utils/Error.Handler";
import catchAsyncError from "../Middleware/catch.Async.error";

const getCart = catchAsyncError(async (req, res, next) => {
  const cart = await CartModel.find({ user: req.user._id }).populate(
    "items.product"
  );

  if (!cart) {
    return next(new ErrorHandler("Cart Not Found", 404));
  }

  res.status(200).json({
    success: true,
    cart,
  });
});

const addToCart = catchAsyncError(async (req, res, next) => {
  const { productId, quantity } = req.body;
  const product = await ProductModel.findById(productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  let cart = await CartModel.findOne({ user: req.user._id });
  if (!cart) {
    cart = await CartModel.create({
      user: req.user._id,
      items: [{ product: productId, quantity }],
    });
  } else {
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
  }

  res.status(200).json({
    success: true,
    cart,
  });
});

const updateCart = catchAsyncError(async (req, res, next) => {
  const { productId, quantity } = req.body;
  const cart = await CartModel.findOne({ user: req.user._id });

  if (!cart) {
    return next(new ErrorHandler("Cart Not Found", 404));
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity = quantity;
    await cart.save();
  } else {
    return next(new ErrorHandler("Product not found in cart", 404));
  }
  res.status(200).json({
    success: true,
    cart,
  });
});

const removeFromCart = catchAsyncError(async (req, res, next) => {
  const { productId } = req.body;
  const cart = await CartModel.findOne({ user: req.user._id });
  if (!cart) {
    return next(new ErrorHandler("Cart Not Found", 404));
  }
  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId
  );
  await cart.save();

  res.status(200).json({
    success: true,
    cart,
  });
});

module.exports = {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
};
