const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const conectDataBase = () => {
  mongoose
    .connect("mongodb://localhost:27017/ecommerce", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`MongoDB Connected With Server ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
    });
};

module.exports = conectDataBase;
