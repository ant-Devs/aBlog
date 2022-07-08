const authorModel = require("../models/author.model");

async function getAllAuthors() {
  try {
    const authors = await authorModel.aggregate([{ $limit: 8 }]);
    return authors;
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured");
  }
}

async function getSingleAuthor(authorId) {
  try {
    const author = await authorModel.find({ _id: authorId });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occured");
  }
}

module.exports = { getAllAuthors };
