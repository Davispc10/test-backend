import { User } from '../../infra/typeorm/entities/User';

export interface IUsersRepository {
  create({ username, email, password }): Promise<User>;
  findUserByUsername(username: string): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  resetDataCache(): void;
}
