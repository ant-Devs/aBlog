const authorModel = require("../models/author.model")

async function getAllAuthors() {
    const authors = await authorModel.find({}, {$limit: 8});
    return authors;
}