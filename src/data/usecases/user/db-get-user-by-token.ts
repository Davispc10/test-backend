import { IUser } from '../../../domain/entities/user';
import { BusinessError } from '../../../domain/errors/business-error';
import { IGetUserByTokenUseCase } from '../../../domain/usecases/user/get-user-by-token';
import { IJwt } from '../../protocols/jwt';
import { IUserRepository } from '../../repositories/user/user-repository';

export class DbGetUserByTokenUseCase implements IGetUserByTokenUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: IJwt
  ) {}

  async execute(token: string): Promise<Omit<IUser, 'password'>> {
    const payload = (await this.jwtService.verify(token)) as { id: number };

    const user = await this.userRepository.findUserById(payload.id as number);

    if (!user) {
      throw new BusinessError('Invalid token provided', 401);
    }

    Reflect.deleteProperty(user, 'password');
    return user;
  }
}
