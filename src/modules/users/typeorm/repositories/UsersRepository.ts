import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { dataSource } from '../../../../shared/typeorm';
import { ICreateUserDto } from '../../dtos/ICreateUserDto';
import { IUsersRepository } from '../../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = dataSource.getRepository(User);
  }

  async create({ username, email, password }: ICreateUserDto): Promise<User> {
    const user = this.usersRepository.create({
      username,
      email,
      password,
    });

    return await this.usersRepository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    return (await this.usersRepository.findOne({
      where: { username },
    })) as User;
  }
}
