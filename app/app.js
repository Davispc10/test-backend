const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/router');

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.SERVER_PORT || 2510;
app.listen(PORT, () => console.log('Server running'));

module.exports = app;