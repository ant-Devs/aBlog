const express = require("express");
const router = express.Router();

const {getAllBlogs, getOneBlog} = require("../controllers/blogs.controller")

router.route("/").get(async (req, res) => {
    // use blogs controller
    const data = await getAllBlogs();
    console.log(data);
    res.send("Blogs route");
})

router.route("/:blogId").get(async (req, res) => {
    // use Blog controller
    const data = await getOneBlog(req.params.blogId, res)
    console.log(data)
    res.send("single blog route");
})

// router.route(":blogId/")

module.exports = router