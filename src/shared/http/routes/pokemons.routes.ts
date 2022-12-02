import { Router } from 'express';
import { FindPokemonsController } from '../../../modules/pokemons/controllers/FindPokemons-controller';

const pokemonsRoutes = Router();

const findPokemonsController = new FindPokemonsController();

pokemonsRoutes.get('/', findPokemonsController.handle);

export { pokemonsRoutes };
