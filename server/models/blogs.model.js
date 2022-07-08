const mongoose = require("mongoose");


const authorPartialSchema = mongoose.Schema({
    _id : {type: mongoose.Objectid},
    username: {type: "String"}
})

const blogsSchema = mongoose.Schema({
    author: {type: authorPartialSchema},
    reads: {type: Number, default: 0},
    creationDate: {type: Date, default: new Date.now()},
    lastUpdated: {type: Date, default: this.creationDate}
})

const blogModel = mongoose.model("blogsModel", blogsSchema)
module.exports = blogModel