'use strict';

const { DataTypes, Model } = require('sequelize');

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        pokedexNumber: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        imgName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        generation: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        evolutionStage: {
          type: DataTypes.STRING,
        },
        evolved: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        familyId: {
          type: DataTypes.STRING,
        },
        crossGen: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        typeOne: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        typeTwo: {
          type: DataTypes.STRING,
        },
        weatherOne: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        weatherTwo: {
          type: DataTypes.STRING,
        },
        totalStat: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        atk: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        def: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        sta: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        legendary: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        aquirable: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        spawns: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        regional: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        raidable: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        hatchable: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        shiny: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nest: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        new: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        notGettable: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        futureEvolve: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        fullCPAt40: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        fullCPAt39: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'pokemon',
      }
    );
    return this;
  }
}

export default Pokemon;
