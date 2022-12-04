import { Router } from 'express';
import { CreateUserController } from '../../../modules/users/controllers/CreateUser.controller';
import { FindUserByUsernameController } from '../../../modules/users/controllers/FindUserByUsername.controller';
import { FindUserByEmailController } from '../../../modules/users/controllers/FindUserByEmail.controller';
import { celebrate, Joi, Segments } from 'celebrate'
import isAuthenticated from '../../../modules/users/middlewares/isAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const findUserByUsernameController = new FindUserByUsernameController();
const findUserByEmailController = new FindUserByEmailController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
    username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  createUserController.handle);

usersRoutes.get('/email/:email', isAuthenticated, findUserByEmailController.handle);

usersRoutes.get('/username/:username', isAuthenticated, findUserByUsernameController.handle);


export { usersRoutes };
