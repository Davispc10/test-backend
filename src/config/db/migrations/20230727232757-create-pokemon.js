'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      pokedexNumber: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      imgName: {
        type: Sequelize.STRING,
      },
      generation: {
        type: Sequelize.INTEGER,
      },
      evolutionStage: {
        type: Sequelize.STRING,
      },
      evolved: {
        type: Sequelize.BOOLEAN,
      },
      familyId: {
        type: Sequelize.INTEGER,
      },
      crossGeneration: {
        type: Sequelize.BOOLEAN,
      },
      type1: {
        type: Sequelize.STRING,
      },
      type2: {
        type: Sequelize.STRING,
      },
      weather1: {
        type: Sequelize.STRING,
      },
      weather2: {
        type: Sequelize.STRING,
      },
      totalStat: {
        type: Sequelize.INTEGER,
      },
      atk: {
        type: Sequelize.INTEGER,
      },
      def: {
        type: Sequelize.INTEGER,
      },
      sta: {
        type: Sequelize.INTEGER,
      },
      legendary: {
        type: Sequelize.INTEGER,
      },
      acquirable: {
        type: Sequelize.INTEGER,
      },
      spawns: {
        type: Sequelize.BOOLEAN,
      },
      regional: {
        type: Sequelize.BOOLEAN,
      },
      raidable: {
        type: Sequelize.INTEGER,
      },
      hatchable: {
        type: Sequelize.INTEGER,
      },
      shiny: {
        type: Sequelize.BOOLEAN,
      },
      nest: {
        type: Sequelize.BOOLEAN,
      },
      new: {
        type: Sequelize.BOOLEAN,
      },
      notGettable: {
        type: Sequelize.BOOLEAN,
      },
      futureEvolve: {
        type: Sequelize.BOOLEAN,
      },
      cp40: {
        type: Sequelize.INTEGER,
      },
      cp39: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemons');
  },
};
