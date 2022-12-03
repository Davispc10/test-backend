import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindUserByEmailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(email: string) {
    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      return new AppError({
        message: `User from "${email}" does not exist.`,
        statusCode: 404,
      }).toJSON();
    }

    return user;
  }
}
