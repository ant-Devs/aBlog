const blogModel = require("../models/blog.model");

module.exports = async function() {
    let blogs = await blogModel.find({}); 
    return blogs
}