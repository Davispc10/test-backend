const {connection} = require('./connection');

const getAll = async () => {
    const pokemons = await connection.query('SELECT * FROM pokemon');
    connection.release();
    return pokemons.rows;
};

module.exports = {
    getAll
};