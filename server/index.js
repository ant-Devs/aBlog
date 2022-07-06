require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const blogModel  = require("./models/blog.model")

// routes
const homeRoute = require("./routes/pages/home.page")
const api = require("./routes/api/index");


app.use(express.json());
app.use(cors());
// app.use("/", homeRoute);
app.use("/api/v1/", api)


const PORT = process.env.PORT || 3001;

(async function() {
  await mongoose.connect("mongodb://127.0.0.1")
  console.log("Connected to database");

  // await blogModel.create({
  //   title: "This is the house that Jack built",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid consequatur reiciendis debitis dicta sapiente velit nulla laboriosam, eveniet, iste minima, placeat architecto et molestiae exercitationem eum? Aliquid accusantium esse maiores odit ratione praesentium eligendi veritatis! Veniam minus omnis ratione assumenda? Beatae, consequuntur porro voluptate officia in dolore officiis libero?",
  // })
  // console.log("added item to db")


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
  })
})();

