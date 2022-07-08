const mongoose = require("mongoose");


const authorPartialSchema = mongoose.Schema({
    authorId : {type: mongoose.ObjectId},
    username: {type: "String"}
})

const blogsSchema = mongoose.Schema({
    author: {type: authorPartialSchema},
    title: {type: String, required: true},
    body: {type: String, required: true},
    reads: {type: Number, default: 0},
    summary: {type: String},
    creationDate: {type: Date, default: Date.now()},
    lastUpdated: {type: Date, default: this.creationDate}
})

const blogModel = mongoose.model("blogsModel", blogsSchema)
module.exports = blogModel