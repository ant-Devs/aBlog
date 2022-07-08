const blogModel = require("../models/blogs.model");

async function getAllBlogs(res) {
  try {
   return await blogModel.aggregate([
      { $limit: 10 },
      { $project: { _id: 1, title: 1, summary: 1, author: 1, dateCreated: 1 } },
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured: unable to get all blogs");
  }
}

async function getOneBlog(blogId, res) {
    try {
        return await blogModel.find({_id: blogId}) 
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occured: unable to get one blog");      
    }
}


module.exports = {getAllBlogs, getOneBlog}