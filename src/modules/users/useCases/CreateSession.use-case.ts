import 'reflect-metadata';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../IUsersRepository';
import AppError from '../../../shared/errors/appError';
import { inject, injectable } from 'tsyringe';
import { ILoginDto } from '../../auth/dtos/ILoginDto';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth';
import { IUser } from '../dtos/IUser';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';

interface IResponse {
  user: IUser;
  access_token: string;
}

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: Omit<IUsersRepository, 'resetDataCache'>,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ username, password }: ILoginDto): Promise<IResponse> {
    const user = await this.usersRepository.findUserByUsername(username);

    if (!user) {
      throw new AppError({
        statusCode: 401,
        message: 'Username/password is incorrect.',
      });
    }

    const passwordsMatches = await this.hashProvider.compareHash(password, user.saltedHash)

    if (!passwordsMatches) {
      throw new AppError({
        statusCode: 401,
        message: 'Username/password is incorrect.',
      });
    }

    const access_token = sign({}, authConfig.jwt.secret as string, {
      subject: String(user.id),
      expiresIn: authConfig.jwt.expiresIn,
    });

    const { id, saltedHash, ...iUser } = user;
    return {
      user: iUser,
      access_token,
    };
  }
}
