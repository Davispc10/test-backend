import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '@/modules/users/services/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      username,
      email,
      password
    });

    return response.status(201).json(user)
  }
}
