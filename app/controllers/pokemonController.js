const pokemonModel = require('../models/pokemonModel');

const getAll = async (req, res) => {
    try {
        const pokemons = await pokemonModel.getAll();
        res.status(200).json(pokemons);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getByPokedexNumber = async (req, res) => {
    try { 
        const pokemons = await pokemonModel.getByPokedexNumber(req.body);
        res.status(200).json(pokemons);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getByGeneration = async (req, res) => {
    try {
        let {page} = req.query;
        if(page) {
            const pokemons = await pokemonModel.getByGenerationPaged(req.body, page);
            res.status(200).json(pokemons);
            return;
        }

        const pokemons = await pokemonModel.getByGeneration(req.body);
        res.status(200).json(pokemons);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getByType = async (req, res) => {
    try { 
        let {page} = req.query;
        if(page) {
            const pokemons = await pokemonModel.getbyTypePaged(req.body, page);
            res.status(200).json(pokemons);
            return;
        }

        const pokemons = await pokemonModel.getByType(req.body);
        res.status(200).json(pokemons);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getBiggestStatTotal = async (req, res) => {
    try {
        const pokemons = await pokemonModel.getBiggestStatTotal();
        res.status(200).json(pokemons);
    } catch(error) {
        res.status(500).send(error);
    }
}; 

module.exports = {
    getAll,
    getByPokedexNumber,
    getByGeneration,
    getByType,
    getBiggestStatTotal
};