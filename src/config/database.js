require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@postgres:5432/pokemon');

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
}

module.exports = {
  sequelize,
  testDatabaseConnection,
};
