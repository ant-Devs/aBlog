const router = require("express").Router();
const getBlogs = require("../../controllers/getHome")
const getBlog = require("../../controllers/getBlog");
const editBlog = require('../../controllers/editBlog');

// api/v1/home
// api/v1/blog:id
router.route("/home").get(async (req, res) => {
  let blogs = await getBlogs()
  res.json(blogs)
})

router.route("/blogs/:id").get(async (req, res) => {
  res.json(await getBlog(req.params.id))
})

router.route("/edit/:id").patch(async (req, res) => { 
  res.json(await editBlog(req.params.id, req?.body, res))
})

module.exports = router;
