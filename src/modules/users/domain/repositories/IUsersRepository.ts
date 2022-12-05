import { User } from '../../infra/typeorm/entities/User';
import { IUser } from '../models/IUser';

export interface IUsersRepository {
  create({ username, email, password }): Promise<IUser>;
  findUserByUsername(username: string): Promise<IUser | User | null | undefined>;
  findUserByEmail(email: string): Promise<IUser | null | undefined>;
  resetDataCache(): void;
}
