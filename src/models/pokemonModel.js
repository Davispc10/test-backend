// models/pokemon.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pokemon = sequelize.define('Pokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pokedexNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  imgName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  generation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  evolutionStage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  evolved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  familyID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  crossGen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  type1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  weather1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weather2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  statTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  atk: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  def: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  legendary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  aquireable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  spawns: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  regional: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  raidable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  hatchable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  shiny: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  nest: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  new: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  notGettable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  futureEvolve: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  cp40: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cp39: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'pokemon',
  timestamps: false,
});

module.exports = Pokemon;
