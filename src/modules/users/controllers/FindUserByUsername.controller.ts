import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByUsernameUseCase } from '../useCases/FindUserByUsername.use-case';

export class FindUserByUsernameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const findUserByUsernameUseCase = container.resolve(
      FindUserByUsernameUseCase,
    );

    try {

      const user = await findUserByUsernameUseCase.execute(username);
      return response.status(200).json(user);

    } catch (error) {

      response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}
