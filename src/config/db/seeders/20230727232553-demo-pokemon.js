'use strict';
const getPokemonSeedFromXlsx = require('../../../utils/xlsxReader');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let pokemonList = [];

    try {
      pokemonList = getPokemonSeedFromXlsx();
    } catch (error) {
      pokemonList = [];
    }

    return queryInterface.bulkInsert('Pokemons', pokemonList);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokemons', null, {});
  },
};
