const express = require('express');
const PokemonController = require('../controllers/pokemonController');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware')

router.get('/pokemons', authenticateToken, PokemonController.getAllPokemons);
router.get('/pokemons/:id', authenticateToken, PokemonController.getPokemonById);
router.get('/legendary-pokemons',authenticateToken, PokemonController.getLegendaryPokemons);

module.exports = router;
