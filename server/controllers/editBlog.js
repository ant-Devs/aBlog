const blogModel = require("../models/blog.model");

module.exports = async function editBlog(blogId, data, res) {
  try {
    res.send(
      await blogModel.updateOne(
        { _id: blogId },
        { title: data.title, body: data.body }
      )
    );
  } catch (err) {
    console.log(error);
    res.status(500).send("blog edit failed: an error occured");
  }
};
