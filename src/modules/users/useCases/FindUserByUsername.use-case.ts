import 'reflect-metadata';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../domain/models/IUser';

@injectable()
export class FindUserByUsernameUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(username: string): Promise<IUser> {
    const user = await this.usersRepository.findUserByUsername(username);

    if (!user) {
      throw new AppError({
        message: `Username "${username}" not found.`,
        statusCode: 404,
      });
    }
    return user;
  }
}
