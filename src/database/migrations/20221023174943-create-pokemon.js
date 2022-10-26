'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemons', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      pokedexNumber: {
        type: Sequelize.STRING,
      },
      imgName: {
        type: Sequelize.STRING,
      },
      generation: {
        type: Sequelize.STRING,
      },
      evolutionStage: {
        type: Sequelize.STRING,
      },
      evolved: {
        type: Sequelize.STRING,
      },
      familyId: {
        type: Sequelize.STRING,
      },
      crossGen: {
        type: Sequelize.STRING,
      },
      typeOne: {
        type: Sequelize.STRING,
      },
      typeTwo: {
        type: Sequelize.STRING,
      },
      weatherOne: {
        type: Sequelize.STRING,
      },
      weatherTwo: {
        type: Sequelize.STRING,
      },
      totalStat: {
        type: Sequelize.STRING,
      },
      atk: {
        type: Sequelize.STRING,
      },
      def: {
        type: Sequelize.STRING,
      },
      sta: {
        type: Sequelize.STRING,
      },
      legendary: {
        type: Sequelize.STRING,
      },
      aquirable: {
        type: Sequelize.STRING,
      },
      spawns: {
        type: Sequelize.STRING,
      },
      regional: {
        type: Sequelize.STRING,
      },
      raidable: {
        type: Sequelize.STRING,
      },
      hatchable: {
        type: Sequelize.STRING,
      },
      shiny: {
        type: Sequelize.STRING,
      },
      nest: {
        type: Sequelize.STRING,
      },
      new: {
        type: Sequelize.STRING,
      },
      nowGettable: {
        type: Sequelize.STRING,
      },
      futureEvolve: {
        type: Sequelize.STRING,
      },
      fullCPAt40: {
        type: Sequelize.STRING,
      },
      fullCPAt39: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('pokemons');
  },
};
