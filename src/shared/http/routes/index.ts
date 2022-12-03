import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { pokemonsRoutes } from './pokemons.routes';

export const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRoutes);
routes.use('/pokemons', pokemonsRoutes);

module.exports = routes;
