const {connection} = require('./connection');

const getAll = async () => {
    const pokemons = await connection.query('SELECT * FROM pokemon');
    return pokemons.rows;
};

const getByPokedexNumber = async (body) => {
    const {pokedex_number} = body;
    let query = `SELECT * FROM pokemon WHERE pokemon.pokedex_number = ${pokedex_number};`;
    const pokemons = await connection.query(query);
    return pokemons.rows;
};

const getByGeneration = async (body) => {
    const {generation} = body;
    let query = `SELECT * FROM pokemon WHERE pokemon.generation = ${generation};`;
    const pokemons = await connection.query(query);
    return pokemons.rows;
};

const getByGenerationPaged = async (body, page) => {
    const {generation} = body;
    const {page_size} = body;

    pageStart = (page - 1) * page_size;

    let query = `SELECT * FROM pokemon WHERE pokemon.generation = ${generation} LIMIT ${page_size} OFFSET ${pageStart};`;
    console.log(query);
    const pokemons = await connection.query(query);
    return pokemons.rows;
};

module.exports = {
    getAll,
    getByPokedexNumber,
    getByGeneration,
    getByGenerationPaged,
};