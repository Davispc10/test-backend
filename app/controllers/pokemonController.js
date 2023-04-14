const pokemonModel = require('../models/pokemonModel');

const getAll = async (req, res) => {
    const pokemons = await pokemonModel.getAll();
    res.status(200).json(pokemons);
};

module.exports = {
    getAll
};