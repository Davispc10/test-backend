const pokemonModel = require('../models/pokemonModel');

const getAll = async (req, res) => {
    const pokemons = await pokemonModel.getAll();
    res.status(200).json(pokemons);
};

const getByPokedexNumber = async (req, res) => {
    const pokemons = await pokemonModel.getByPokedexNumber(req.body);
    res.status(200).json(pokemons);
};

const getByGeneration = async (req, res) => {
    let {page} = req.query;
    if(page) {
        const pokemons = await pokemonModel.getByGenerationPaged(req.body, page);
        res.status(200).json(pokemons);
        return;
    }

    const pokemons = await pokemonModel.getByGeneration(req.body);
    res.status(200).json(pokemons);
};

const getByType = async (req, res) => {
    let {page} = req.query;
    if(page) {
        const pokemons = await pokemonModel.getbyTypePaged(req.body, page);
        res.status(200).json(pokemons);
        return;
    }

    const pokemons = await pokemonModel.getByType(req.body);
    res.status(200).json(pokemons);
};

const getBiggestStatTotal = async (req, res) => {
    const pokemons = await pokemonModel.getBiggestStatTotal();
    res.status(200).json(pokemons);
}; 

module.exports = {
    getAll,
    getByPokedexNumber,
    getByGeneration,
    getByType,
    getBiggestStatTotal
};