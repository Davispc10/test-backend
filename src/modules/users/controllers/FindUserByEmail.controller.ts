import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByEmailUseCase } from '../useCases/FindUserByEmail.use-case';

export class FindUserByEmailController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;

    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

    const user = await findUserByEmailUseCase.execute(email);

    return response.status(200).json(user);
  }
}
