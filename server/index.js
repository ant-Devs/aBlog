require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

// routes
const homeRoute = require("./routes/pages/home.page")
const api = require("./routes/api/index");

app.use(express.json());
app.use("/", homeRoute);
app.use("/api/v1/", api)


const PORT = process.env.PORT;

(async function() {
  await mongoose.connect("mongodb://127.0.0.1")
  console.log("Connected to database");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
  })
})();

