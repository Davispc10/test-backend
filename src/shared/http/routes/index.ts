import { Router } from 'express';
import { usersRoutes } from '../../../shared/http/routes/users.routes';

export const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.use('/users', usersRoutes);

module.exports = routes;
