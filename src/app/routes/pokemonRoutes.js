import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import validate from '../services/checkValidation';
import PokemonController from '../controllers/PokemonController';

const pokemonRoutes = new Router();

pokemonRoutes.get('/', asyncHandler(PokemonController.getInfo));

pokemonRoutes.get('/pokemons', validate.validateQuery, asyncHandler(PokemonController.listAll));
pokemonRoutes.post('/pokemons', validate.validateCreateBody, asyncHandler(PokemonController.store));

pokemonRoutes.get('/pokemons/:id', validate.validateParams, asyncHandler(PokemonController.getById));
pokemonRoutes.put(
  '/pokemons/:id',
  validate.validateParams,
  validate.validateUpdateBody,
  asyncHandler(PokemonController.update)
);
pokemonRoutes.delete('/pokemons/:id', validate.validateParams, asyncHandler(PokemonController.delete));

export default pokemonRoutes;
