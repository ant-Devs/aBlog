const router = require("express").Router();




router.route("/").get((req, res) => {
  res.send("Welcome Home");
})

module.exports = router
