require('dotenv').config();
const { Sequelize } = require('sequelize');
const environments = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    database: process.env.DB_TEST_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};

const environment = process.env.NODE_ENV || 'development';
const config = environments[environment];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
})
module.exports = sequelize;
