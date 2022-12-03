import { User } from '../../../typeorm/entities/User';
import { ICreateUserDto } from '../../../dtos/ICreateUserDto';
import { IUsersRepository } from '../../../IUsersRepository';

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create({ username, email, password }: ICreateUserDto): Promise<User> {
    const user = new User();
    user.id = 1;
    user.username = username;
    user.email = email;
    user.password = password;

    this.users.push(user);

    return user;
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async resetDataCache() {
    this.users = [];
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
