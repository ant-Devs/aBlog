const express = require('express');
const router = require("express").Router();


// api/v1/home
// api/v1/blog:id
router.route("/home").get((req, res) => {
  res.send("Getting api data of home")
})

router.route("/blog:id").get((req, res) => {
  res.send(`Getting api data of blog with id: ${req.params.id}`)
})

module.exports = router;
