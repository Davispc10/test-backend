import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: Omit<IUsersRepository, 'resetDataCache'>,
  ) {}

  async execute({ username, email, password }: ICreateUserDto) {
    const userAlreadyExists = await this.usersRepository.findUserByUsername(
      username,
    );
    const emailAlreadyExists = await this.usersRepository.findUserByEmail(
      email,
    );

    if (userAlreadyExists || emailAlreadyExists) {
      return new AppError({
        message: `The username "${username}" or email "${email}" is already registered.`,
        statusCode: 409,
      }).toJSON();
    }

    return await this.usersRepository.create({
      username,
      email,
      password,
    });
  }
}
