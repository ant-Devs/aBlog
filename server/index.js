require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

//home route;
app.get("/", async (req, res) => {
  console.log(req.url);
  res.json({res: "200 Welcome Home"});
})

app.get("/blogs", (req, res) => {
  console.log(req.url);
  res.send("all blogs");
})

const PORT = process.env.PORT;

(async function() {
  await mongoose.connect("mongodb://127.0.0.1")
  console.log("Connected to database");

  app.listen(PORT, ()  => {
    console.log("Server is running on port\n", PORT);
  })
})();

