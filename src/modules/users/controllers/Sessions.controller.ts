import {Request, Response} from 'express';
import { CreateSessionUseCase } from '../useCases/CreateSession.use-case';
import { container } from 'tsyringe';

export class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const {username, password} = request.body;

    const createSession = container.resolve(CreateSessionUseCase);

    const user = await createSession.execute({
      username,
      password
    });

    return response.json(user);

  }
}
