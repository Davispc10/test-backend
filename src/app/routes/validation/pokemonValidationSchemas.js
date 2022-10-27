import Joi from 'joi';

export default {
  createSchema: Joi.object({
    name: Joi.string().required(),
    pokedexNumber: Joi.string().required(),
    imgName: Joi.string().required(),
    generation: Joi.string().required(),
    evolutionStage: Joi.string().required(),
    evolved: Joi.string().required(),
    familyId: Joi.string().required(),
    crossGen: Joi.string().required(),
    typeOne: Joi.string().required(),
    typeTwo: Joi.string().optional(),
    weatherOne: Joi.string().required(),
    weatherTwo: Joi.string().optional(),
    totalStat: Joi.string().required(),
    atk: Joi.string().required(),
    def: Joi.string().required(),
    sta: Joi.string().required(),
    legendary: Joi.string().required(),
    aquirable: Joi.string().required(),
    spawns: Joi.string().required(),
    regional: Joi.string().required(),
    raidable: Joi.string().required(),
    hatchable: Joi.string().required(),
    shiny: Joi.string().required(),
    nest: Joi.string().required(),
    new: Joi.string().required(),
    notGettable: Joi.string().required(),
    futureEvolve: Joi.string().required(),
    fullCPAt40: Joi.string().required(),
    fullCPAt39: Joi.string().required(),
  }),

  updateSchema: Joi.object({
    name: Joi.string().optional(),
    pokedexNumber: Joi.string().optional(),
    imgName: Joi.string().optional(),
    generation: Joi.string().optional(),
    evolutionStage: Joi.string().optional(),
    evolved: Joi.string().optional(),
    familyId: Joi.string().optional(),
    crossGen: Joi.string().optional(),
    typeOne: Joi.string().optional(),
    typeTwo: Joi.string().optional(),
    weatherOne: Joi.string().optional(),
    weatherTwo: Joi.string().optional(),
    totalStat: Joi.string().optional(),
    atk: Joi.string().optional(),
    def: Joi.string().optional(),
    sta: Joi.string().optional(),
    legendary: Joi.string().optional(),
    aquirable: Joi.string().optional(),
    spawns: Joi.string().optional(),
    regional: Joi.string().optional(),
    raidable: Joi.string().optional(),
    hatchable: Joi.string().optional(),
    shiny: Joi.string().optional(),
    nest: Joi.string().optional(),
    new: Joi.string().optional(),
    notGettable: Joi.string().optional(),
    futureEvolve: Joi.string().optional(),
    fullCPAt40: Joi.string().optional(),
    fullCPAt39: Joi.string().optional(),
  }),

  paramSchema: Joi.object({
    id: Joi.number().integer().min(0).required(),
  }),
};
