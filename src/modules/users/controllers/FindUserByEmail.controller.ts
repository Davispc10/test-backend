import 'reflect-metadata';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByEmailUseCase } from '../useCases/FindUserByEmail.use-case';

export class FindUserByEmailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

    try {

      const user = await findUserByEmailUseCase.execute(email);
      return response.status(200).json(user);

    } catch (error) {

      response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode
      })
    }
  }
}
