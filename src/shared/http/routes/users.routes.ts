import { Router } from 'express';
import { CreateUserController } from '../../../modules/users/controllers/CreateUser.controller';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
