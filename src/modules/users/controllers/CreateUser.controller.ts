import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '../useCases/CreateUser.use-case';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      const user = await createUserUseCase.execute({
        username,
        email,
        password,
      });

      return response.status(201).json(user);
    } catch (error) {

      response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}
