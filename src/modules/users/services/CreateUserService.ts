import { UsersRepository } from '@/modules/users/typeorm/repositories/UsersRepository'
import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '@/modules/users/dtos/ICreateUserDto';
import { IUsersRepository } from '@/modules/users/IUsersRepository';
import AppError from '@/shared/errors/appError';


@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ username, email, password }: ICreateUserDto) {
    const userAlreadyExists = await this.usersRepository.findByUsername(username);

    if (userAlreadyExists) {
      throw new AppError({ message: `The username ${username} is already registered`, statusCode: 406 });
    }

    const user = await this.usersRepository.create({
      username,
      email,
      password,
    });

    return user
  }
}
