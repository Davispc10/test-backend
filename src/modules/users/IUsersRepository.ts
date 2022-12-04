import { User } from './typeorm/entities/User';

export interface IUsersRepository {
  create({ username, email, password }): Promise<User | undefined>;
  findUserByUsername(username: string): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  resetDataCache(): void;
}
