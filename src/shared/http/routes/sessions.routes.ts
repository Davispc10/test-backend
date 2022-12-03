import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { SessionsController } from '../../../modules/users/controllers/Sessions.controller';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      username: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export { sessionsRouter }
