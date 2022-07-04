const blogModel = require("../models/blog.model")

module.exports = function(blogId) {
    return blogModel.find({"_id": blogId})
}