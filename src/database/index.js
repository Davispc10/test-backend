const mongoose = require('mongoose');
require('dotenv/config')

mongoose.connect(process.env.DATABASE_URL_HOMOLOG);
mongoose.Promise = global.Promise;

module.exports = mongoose