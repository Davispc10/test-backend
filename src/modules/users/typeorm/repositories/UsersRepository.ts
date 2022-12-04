import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { dataSource } from '../../../../shared/typeorm';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { IUsersRepository } from '../../IUsersRepository';
import { IUser } from '../../dtos/IUser';

export class UsersRepository
  implements Omit<IUsersRepository, 'resetDataCache'>
{
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = dataSource.getRepository(User);
  }

  async create({ username, email, password }: ICreateUserDto): Promise<IUser> {
    const user = this.usersRepository.create({
      username,
      email,
      password,
    });

    return await this.usersRepository.save(user);
  }

  async findUserByUsername(username: string): Promise<IUser> {
    return (await this.usersRepository.findOne({
      where: { username },
    })) as User;
  }

  async findUserByEmail(email: string): Promise<IUser | undefined> {
    return (await this.usersRepository.findOne({
      where: { email },
    })) as User;
  }
}
