import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { pokemonsRoutes } from './pokemons.routes';
import { sessionsRouter } from './sessions.routes';

export const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRoutes);
routes.use('/pokemons', pokemonsRoutes);
routes.use('/sessions', sessionsRouter);

module.exports = routes;
