import { Router } from 'express';
import { CreateUserController } from '../../../modules/users/controllers/CreateUser.controller';
import { FindUserByUsernameController } from '../../../modules/users/controllers/FindUserByUsername.controller';
import { FindUserByEmailController } from '../../../modules/users/controllers/FindUserByEmail.controller';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const findUserByUsernameController = new FindUserByUsernameController();
const findUserByEmailController = new FindUserByEmailController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/:username', findUserByUsernameController.handle);
usersRoutes.get('/email/:email', findUserByEmailController.handle);

export { usersRoutes };
