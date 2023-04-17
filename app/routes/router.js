const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', (req, res) => res.status(200).send('API Pokemon GO - Ana Laura S. Mendes'));
router.get('/pokemons', pokemonController.getAll);
router.get('/pokemons/finders/biggest_stat', pokemonController.getBiggestStatTotal);
router.post('/pokemons/filters/pokedex_number', pokemonController.getByPokedexNumber);
router.post('/pokemons/filters/generation', pokemonController.getByGeneration);
router.post('/pokemons/filters/type', pokemonController.getByType);

module.exports = router;