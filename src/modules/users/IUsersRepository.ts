import { User } from './typeorm/entities/User';

export interface IUsersRepository {
  create({ username, email, password }): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
}
