import "reflect-metadata"
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '../useCases/CreateUser.use-case';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, email, password } = request.body;

    const createUserService = container.resolve(CreateUserUseCase);

    const user = await createUserService.execute({
      username,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}
