const express = require('express');
const bodyParser = require('body-parser');
const PokemonController = require('../app/controllers/pokemonController');
const PokemonUseCases = require('../app/useCases/PokemonUseCases');
const PokemonRepository = require('../app/repository/pokemonRepository');

const pokemonRepository = new PokemonRepository();
const pokemonUseCases = new PokemonUseCases(pokemonRepository);
const pokemonController = new PokemonController(pokemonUseCases);

const app = express();

app.use(bodyParser.json());

app.get('/pokemons', pokemonController.getAll);
app.get('/pokemons/:pokemonId', pokemonController.getByPomekonId);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
