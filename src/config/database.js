require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URI);

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection was stablished!');
  } catch (error) {
    console.error('Error to connect on database', error);
  }
}

module.exports = {
  sequelize,
  testDatabaseConnection,
};
