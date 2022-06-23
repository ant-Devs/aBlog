const dotenv = require("dotenv")
const express = require("express");
const app = express();

console.log(dotenv.config())
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, ()  => {
  console.log("Server is running on port ", PORT);
})
