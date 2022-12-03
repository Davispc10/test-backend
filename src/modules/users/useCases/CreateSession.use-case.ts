import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import * as bcrypt from 'bcrypt';
import { ILoginDto } from '../../auth/dtos/ILoginDto';
import { sign } from 'jsonwebtoken';
import { User } from '../typeorm/entities/User';
import authConfig from '../../../config/auth'


interface IResponse {
  user: User;
  access_token: string;
}

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: Omit<IUsersRepository, 'resetDataCache'>,
  ) {}

  async execute({ username, password }: ILoginDto): Promise<IResponse> {
    const user = await this.usersRepository.findUserByUsername(username);

    if (!user) {
      throw new AppError({statusCode: 401, message: 'Username/password is incorrect.'})
    }

    const passwordsMatches = bcrypt.compareSync(password, user.password);

    if (!passwordsMatches) {
      throw new AppError({statusCode: 401, message: 'Username/password is incorrect.'});
    }

    const access_token = sign({}, authConfig.jwt.secret, {
      subject: String(user.id),
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      user,
      access_token
    }
  };
}
