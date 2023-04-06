import { Router } from 'express';
import GetPokemonHandler from '../handlers/GetPokemonHandler';
import GetRandomPokemonHandler from '../handlers/GetRandomPokemonHandler';
import ListPokemonHandler from '../handlers/ListPokemonHandler';
import { container } from '../inversify.config';
import { TYPES } from '../types';

const listPokemonHandler = container.get<ListPokemonHandler>(TYPES.ListPokemonHandler);
const getPokemonHandler = container.get<GetPokemonHandler>(TYPES.GetPokemonHandler);
const getRandomPokemonHandler = container.get<GetRandomPokemonHandler>(TYPES.GetRandomPokemonHandler);

const pokemonRouter = Router();

pokemonRouter.get('/', listPokemonHandler.handle.bind(listPokemonHandler));
pokemonRouter.get('/random', getRandomPokemonHandler.handle.bind(getRandomPokemonHandler));
pokemonRouter.get('/:idOrName', getPokemonHandler.handle.bind(getPokemonHandler));

export default pokemonRouter;
