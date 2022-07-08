const express = require('express');
const router = express.Router();

const {getAllAuthors} = require("../controllers/author.controller")

router.route("/partial:authorId").get(async (req, res) => {
    // use author controller;
    const author = await getAllAuthors(req.params.authorId, res)
    console.log(author)
    res.send("Partial author details"); 
})

router.route("/:authorId").get(async (req, res) => {
    // use author controller
    getSingleAuthor(req.params.authorId, res)
    res.send("Entire author details");
})


module.exports = router