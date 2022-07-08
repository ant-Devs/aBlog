const blogModel = require("../models/blog.model");

module.exports = async function deleteBlog(id, res) {
  try {
    await blogModel.deleteOne({_id: id})
    let blogs = await blogModel.aggregate([
        {
          $project: {
            _id: 1,
            title: 1,
            author: 1,
            body: {
              $substr: [
                "$body",
                0,
                { $add: [130, { $multiply: [{ $rand: {} }, 80] }] },
              ],
            },
          },
        },
      ]
    ); 
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(500).send("blog edit failed: an error occured");
  }
};
