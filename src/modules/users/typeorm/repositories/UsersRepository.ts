import { Repository } from 'typeorm';
import { User } from '../../../../modules/users/typeorm/entities/User';
import { dataSource } from '../../../../shared/typeorm';
import { ICreateUserDto } from '../../../../modules/users/dtos/ICreateUserDto';
import { IUsersRepository } from '../../../../modules/users/IUsersRepository';

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
