const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
    id: {type: mongoose.ObjectId}, 
    title: {type: String}
})
const authorSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    blogs: {type: blogsSchema}
}, {collection: "authors"})
   
  const authorModel = mongoose.model("authors", authorSchema);
  
  module.exports = authorModel