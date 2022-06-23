const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  dateCreated: {type: Date, default: Date.now()},
  author: {type: String, default: "anonymous"},
  assets: {type: String}
}, {collection: "articles"})


const model = mongoose.model("article", articleSchema);

module.exports = model
