import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { User } from '../typeorm/entities/User';

@injectable()
export class FindUserByUsernameUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(username: string): Promise<User> {
    const user = await this.usersRepository.findUserByUsername(username);

    if (!user) {
      throw new AppError({
        message: `Username "${username}" not found.`,
        statusCode: 404,
      })
    }

    return user;
  }
}
