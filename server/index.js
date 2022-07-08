const express = require('express');
const cors = require("cors");
const blogsRouter = require('./routes/blogs.route');
const authorRouter = require('./routes/author.route');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001

app.use("/api/blogs", blogsRouter)
app.use("/api/author", authorRouter)

app.use(express.json())
app.use(cors());


(async function() {
    // connect to the database
    await mongoose.connect("mongodb://localhost:27017/aBlog")
    console.log("Connected to database");

    

    // start server
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})()