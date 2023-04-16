const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/router');

const app = express();
app.use(express.json());
app.use(router);

module.exports = app;