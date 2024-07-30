const express = require('express');
const sequelize = require('./config/database');
const pokemonRoutes = require('./routes/pokemonRoutes');
const authRoutes = require('../src/routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api', pokemonRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

module.exports = app;
