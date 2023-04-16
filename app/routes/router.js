const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', (req, res) => res.status(200).send('API Pokemon GO - Ana Laura S. Mendes'));
router.get('/pokemons', pokemonController.getAll);

router.get('/pokemons/filters/pokedex_number', pokemonController.getByPokedexNumber);
router.get('/pokemons/filters/generation', pokemonController.getByGeneration);
router.get('/pokemons/filters/type', pokemonController.getByType);

router.get('/pokemons/finders/biggest_stat', pokemonController.getBiggestStatTotal);

module.exports = router;