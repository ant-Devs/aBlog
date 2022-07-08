const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    // use blogs controller
    res.send("Blogs route");
})

router.route("/:blogId").get((req, res) => {
    // use Blog controller
    res.send("single blog route");
})

// router.route(":blogId/")

module.exports = router