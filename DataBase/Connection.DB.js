const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const conectDataBase = () => {
  mongoose
    .connect("//URL-TO-MONGODB", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`MongoDB Connected With Server ${data.connection.host}`);
    });
};

module.exports = conectDataBase;
