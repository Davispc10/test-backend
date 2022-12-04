import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindUserByEmailUseCase } from '../../../useCases/FindUserByEmail.use-case';
import CatchErrors from '../../../../../shared/decorators/CatchErrors.decorator';
import { instanceToPlain } from 'class-transformer';

export class FindUserByEmailController {
  @CatchErrors
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

    const user = await findUserByEmailUseCase.execute(email);

    return response.status(200).json(instanceToPlain(user));
  }
}
