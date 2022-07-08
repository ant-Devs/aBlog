const blogModel = require("../models/blog.model");

module.exports = async function editBlog(data, res) {
  try {
    res.send(
      await blogModel.create(
        { title: data.title, body: data.body })
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("blog edit failed: an error occured");
  }
};
