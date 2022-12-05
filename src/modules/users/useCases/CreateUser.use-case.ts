import 'reflect-metadata';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';
import { ICreateUser } from '../domain/models/ICreateUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../domain/models/IUser';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: Omit<IUsersRepository, 'resetDataCache'>,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ username, email, password }: ICreateUser): Promise<IUser> {
    const userAlreadyExists = await this.usersRepository.findUserByUsername(username);

    const emailAlreadyExists = await this.usersRepository.findUserByEmail(email);

    if (userAlreadyExists || emailAlreadyExists) {
      throw new AppError({
        message: `The username "${username}" or email "${email}" is already registered.`,
        statusCode: 409,
      });
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    return await this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
    });
  }
}
