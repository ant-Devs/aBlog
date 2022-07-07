const blogModel = require("../models/blog.model");

module.exports = async function () {
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
  return blogs;
};
