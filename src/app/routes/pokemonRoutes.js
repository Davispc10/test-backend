import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import PokemonController from '../controllers/PokemonController';

const pokemonRoutes = new Router();

pokemonRoutes.get('/pokemons', asyncHandler(PokemonController.listAll));
pokemonRoutes.post('/pokemons', asyncHandler(PokemonController.store));
pokemonRoutes.get('/pokemons/:id', asyncHandler(PokemonController.listById));
pokemonRoutes.put('pokemons/:id', asyncHandler(PokemonController.update));

export default pokemonRoutes;
