import { Router } from 'express';
import { usersRoutes } from '../../../../modules/users/infra/http/routes/users.routes';
import { pokemonsRoutes } from '../../../../modules/pokemons/infra/http/routes/pokemons.routes';
import { sessionsRouter } from '../../../../modules/users/infra/http/routes/sessions.routes';

export const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRoutes);
routes.use('/pokemons', pokemonsRoutes);
routes.use('/sessions', sessionsRouter);

module.exports = routes;
