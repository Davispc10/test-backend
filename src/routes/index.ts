import { Router } from 'express';
import { pokemonRoutes } from './pokemon.routes';
import { trainerRoutes } from './trainer.routes';

export const routes = Router();

routes.use('/pokemon', pokemonRoutes);
routes.use('/trainer', trainerRoutes);