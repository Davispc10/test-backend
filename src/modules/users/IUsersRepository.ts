import { IUser } from './dtos/IUser';

export interface IUsersRepository {
  create({ username, email, password }): Promise<IUser | undefined>;
  findUserByUsername(username: string): Promise<IUser | undefined>;
  findUserByEmail(email: string): Promise<IUser | undefined>;
  resetDataCache(): void;
}
