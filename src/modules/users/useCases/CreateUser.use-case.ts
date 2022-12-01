import 'reflect-metadata'
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, email, password }: ICreateUserDto) {
    const userAlreadyExists = await this.usersRepository.findByUsername(
      username,
    );

    if (userAlreadyExists) {
      return new AppError({
        message: `The username ${username} is already registered`,
        statusCode: 409,
      }).toJSON();
    }

    const user = await this.usersRepository.create({
      username,
      email,
      password,
    });

    return user;
  }
}
