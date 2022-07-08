const express = require('express');
const router = express.Router();

router.route("/", (req, res) => {
    // use author controller;
    res.send("Full author details"); 
})

router.route("/partials/:authorId", (req, res) => {
    // use author controller
    res.send("Entire author details");
})


module.exports = router