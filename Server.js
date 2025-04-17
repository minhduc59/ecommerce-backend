const express = require("express");
const app = express();
const ProductRoute = require("./Routes/Product.Route");
const UserRoute = require("./Routes/User.Route");
const OrderRoute = require("./Routes/Order.Route");
const PaymentRoute = require("./Routes/Payment.Route");

const colors = require("colors");
const path = require("path");
const cors = require("cors");
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const conectDataBase = require("./DataBase/Connection.DB");
const ErrorMiddleware = require("./Middleware/Error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const logger = require("./logger"); // Import logger
require("dotenv").config();

process.on("uncaughtException", (err) => {
  logger.error(`Error: ${err.message}`);
  logger.error(`Shutting down the server due to Unhandled Promise Exception`);
  process.exit(1);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(morgan("dev"));

conectDataBase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/v1", ProductRoute);
app.use("/api/v1", UserRoute);
app.use("/api/v1", OrderRoute);
app.use("/api/v1", PaymentRoute);

app.use(ErrorMiddleware);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  logger.info(`Server is Listening on Port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  logger.error(`Error: ${err.message}`);
  logger.error(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
