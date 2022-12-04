import { User } from '../../../infra/typeorm/entities/User';
import { ICreateUser } from '../../../domain/models/ICreateUser';
import { IUsersRepository } from '../../../domain/repositories/IUsersRepository';

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create({ username, email, password }: ICreateUser): Promise<User> {
    const user = new User();
    user.id = 1;
    user.username = username;
    user.email = email;
    user.saltedHash = password;

    this.users.push(user);

    return user
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
