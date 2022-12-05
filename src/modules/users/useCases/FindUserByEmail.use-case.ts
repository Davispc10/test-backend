import 'reflect-metadata';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../domain/models/IUser';

@injectable()
export class FindUserByEmailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(email: string): Promise<IUser> {
    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new AppError({
        message: `Email "${email}" not found.`,
        statusCode: 404,
      });
    }
    return user;
  }
}
