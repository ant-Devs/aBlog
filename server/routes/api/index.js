const router = require("express").Router();
const getBlogs = require("../../controllers/getHome")
const getBlog = require("../../controllers/getBlog");

// api/v1/home
// api/v1/blog:id
router.route("/home").get(async (req, res) => {
  let blogs = await getBlogs()
  res.json(blogs)
})

router.route("/blog:id").get(async (req, res) => {
  res.json(await getBlog(req.params.id))
})

module.exports = router;
