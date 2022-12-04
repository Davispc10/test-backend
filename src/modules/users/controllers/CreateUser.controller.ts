import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '../useCases/CreateUser.use-case';
import CatchErrors from '../../decorators/CatchErrors.decorator';

export class CreateUserController {
  @CatchErrors
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      username,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}
