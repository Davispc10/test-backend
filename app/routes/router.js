const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', (req, res) => 
    res.status(200).send('API Pokemon GO - Ana Laura S. Mendes'));

router.get('/pokemons', pokemonController.getAll);

module.exports = router;