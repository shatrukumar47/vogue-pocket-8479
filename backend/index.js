const express = require("express");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const { exerciseRouter } = require("./routes/exerciseRoute");
const { yogaRoute } = require("./routes/yogaRoute");
const { productRoute } = require("./routes/productRoute");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/users", userRoute);
app.use("/exercise", exerciseRouter);
app.use("/products", productRoute);
app.use("/yoga", yogaRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
app.listen(process.env.PORT, () => {
  connect();

  console.log("listen");
});

module.exports = app;
