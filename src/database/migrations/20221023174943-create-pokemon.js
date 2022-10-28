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
        allowNull: false,
      },
      pokedexNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imgName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      generation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      evolutionStage: {
        type: Sequelize.STRING,
      },
      evolved: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      familyId: {
        type: Sequelize.STRING,
      },
      crossGen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeOne: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeTwo: {
        type: Sequelize.STRING,
      },
      weatherOne: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weatherTwo: {
        type: Sequelize.STRING,
      },
      totalStat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      atk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      def: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      legendary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aquirable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      spawns: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      regional: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raidable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hatchable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shiny: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nest: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      new: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notGettable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      futureEvolve: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fullCPAt40: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fullCPAt39: {
        type: Sequelize.STRING,
        allowNull: false,
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
