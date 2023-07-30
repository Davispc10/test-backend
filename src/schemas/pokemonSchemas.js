const Joi = require('joi');

const pokemonListSchema = Joi.object({
  page: Joi.number().min(1).required(),
  pageSize: Joi.number().min(1).required(),
  evolutionStage: Joi.string(),
  evolved: Joi.boolean(),
  shiny: Joi.boolean(),
  type1: Joi.string(),
  type2: Joi.string(),
  weather1: Joi.string(),
  weather2: Joi.string(),
});

const pokemonByIdSchema = Joi.object({
  pokemonId: Joi.number().min(1).required(),
});

module.exports = {
  pokemonListSchema,
  pokemonByIdSchema,
};
