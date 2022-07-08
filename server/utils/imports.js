const express = require('express');
const cors = require("cors");
const blogsRouter = require('./routes/blogs.route');
const authorRouter = require('./routes/author.route');
const mongoose = require("mongoose");