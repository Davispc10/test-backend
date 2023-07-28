import { Router } from 'express';

export const routes = Router();

routes.get('/trainers', (rqeuest, response) => {
  return response.status(200).json({
    message: 'sucesso'
  });
});