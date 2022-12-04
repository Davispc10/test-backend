import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { dataSource } from '../../../../../shared/infra/typeorm';
import { ICreateUser } from '../../../domain/models/ICreateUser';
import { IUsersRepository } from '../../../domain/repositories/IUsersRepository';


export class UsersRepository
  implements Omit<IUsersRepository, 'resetDataCache'>
{
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = dataSource.getRepository(User);
  }

  async create({
    username,
    email,
    password,
  }: ICreateUser): Promise<User | undefined> {
    const user = this.usersRepository.create({
      username,
      email,
      saltedHash: password,
    });

    return await this.usersRepository.save(user);
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return (await this.usersRepository.findOne({
      where: { username },
    })) as User;
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return (await this.usersRepository.findOne({
      where: { email },
    })) as User;
  }
}
