import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByUsernameUseCase } from '../../../useCases/FindUserByUsername.use-case';
import CatchErrors from '../../../../decorators/CatchErrors.decorator';
import { instanceToPlain } from 'class-transformer';

export class FindUserByUsernameController {
  @CatchErrors
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const findUserByUsernameUseCase = container.resolve(FindUserByUsernameUseCase);

    const user = await findUserByUsernameUseCase.execute(username);

    return response.status(200).json(instanceToPlain(user));
  }
}
