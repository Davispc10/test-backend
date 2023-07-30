'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

class Pokemon extends Model {}

Pokemon.init(
  {
    name: DataTypes.STRING,
    pokedexNumber: DataTypes.INTEGER,
    imgName: DataTypes.STRING,
    generation: DataTypes.INTEGER,
    evolutionStage: DataTypes.STRING,
    evolved: DataTypes.BOOLEAN,
    familyId: DataTypes.INTEGER,
    crossGeneration: DataTypes.BOOLEAN,
    type1: DataTypes.STRING,
    type2: DataTypes.STRING,
    weather1: DataTypes.STRING,
    weather2: DataTypes.STRING,
    totalStat: DataTypes.INTEGER,
    atk: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    sta: DataTypes.INTEGER,
    legendary: DataTypes.INTEGER,
    acquirable: DataTypes.INTEGER,
    spawns: DataTypes.BOOLEAN,
    regional: DataTypes.BOOLEAN,
    raidable: DataTypes.INTEGER,
    hatchable: DataTypes.INTEGER,
    shiny: DataTypes.BOOLEAN,
    nest: DataTypes.BOOLEAN,
    new: DataTypes.BOOLEAN,
    notGettable: DataTypes.BOOLEAN,
    futureEvolve: DataTypes.BOOLEAN,
    cp40: DataTypes.INTEGER,
    cp39: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Pokemon',
    timestamps: false,
  }
);

module.exports = Pokemon;
