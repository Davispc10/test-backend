'use strict';

const { DataTypes, Model } = require('sequelize');

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
        },
        pokedexNumber: {
          type: DataTypes.STRING,
        },
        imgName: {
          type: DataTypes.STRING,
        },
        generation: {
          type: DataTypes.STRING,
        },
        evolutionStage: {
          type: DataTypes.STRING,
        },
        evolved: {
          type: DataTypes.STRING,
        },
        familyId: {
          type: DataTypes.STRING,
        },
        crossGen: {
          type: DataTypes.STRING,
        },
        typeOne: {
          type: DataTypes.STRING,
        },
        typeTwo: {
          type: DataTypes.STRING,
        },
        weatherOne: {
          type: DataTypes.STRING,
        },
        weatherTwo: {
          type: DataTypes.STRING,
        },
        totalStat: {
          type: DataTypes.STRING,
        },
        atk: {
          type: DataTypes.STRING,
        },
        def: {
          type: DataTypes.STRING,
        },
        sta: {
          type: DataTypes.STRING,
        },
        legendary: {
          type: DataTypes.STRING,
        },
        aquirable: {
          type: DataTypes.STRING,
        },
        spawns: {
          type: DataTypes.STRING,
        },
        regional: {
          type: DataTypes.STRING,
        },
        raidable: {
          type: DataTypes.STRING,
        },
        hatchable: {
          type: DataTypes.STRING,
        },
        shiny: {
          type: DataTypes.STRING,
        },
        nest: {
          type: DataTypes.STRING,
        },
        new: {
          type: DataTypes.STRING,
        },
        notGettable: {
          type: DataTypes.STRING,
        },
        futureEvolve: {
          type: DataTypes.STRING,
        },
        fullCPAt40: {
          type: DataTypes.STRING,
        },
        fullCPAt39: {
          type: DataTypes.STRING,
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
