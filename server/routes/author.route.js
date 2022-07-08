const express = require('express');
const router = express.Router();

const authorController = require("../controllers/author.controller")

router.route("/", async (req, res) => {
    // use author controller;
    console.log(await authorController())
    res.send("Full author details"); 
})

router.route("/:authorId", (req, res) => {
    // use author controller
    res.send("Entire author details");
})


module.exports = router