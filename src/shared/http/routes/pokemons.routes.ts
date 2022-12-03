import { Router } from 'express';
import { FindPokemonsController } from '../../../modules/pokemons/controllers/FindPokemons.controller';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../modules/users/middlewares/isAuthenticated';

const pokemonsRoutes = Router();

const findPokemonsController = new FindPokemonsController();

pokemonsRoutes.get(
  '/', isAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      pokedexNumber: Joi.number(),
      generation: Joi.string(),
      legendary: Joi.number(),
      type1: Joi.string(),
      weather: Joi.string(),
      page: Joi.number(),
      limit: Joi.number(),
    }
  }),
  findPokemonsController.handle);

export { pokemonsRoutes };
