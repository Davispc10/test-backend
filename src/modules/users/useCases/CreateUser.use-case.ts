import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../dtos/IUser';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';


@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: Omit<IUsersRepository, 'resetDataCache'>,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    username,
    email,
    password,
  }: ICreateUserDto): Promise<IUser | unknown> {
    const userAlreadyExists = await this.usersRepository.findUserByUsername(
      username,
    );

    const emailAlreadyExists = await this.usersRepository.findUserByEmail(
      email,
    );

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
