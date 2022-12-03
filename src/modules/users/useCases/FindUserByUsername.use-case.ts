import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindUserByUsernameUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(username: string) {
    const user = await this.usersRepository.findUserByUsername(username);

    if (!user) {
      return new AppError({
        message: `User from ${username} does not exist.`,
        statusCode: 404,
      }).toJSON();
    }

    return user;
  }
}
