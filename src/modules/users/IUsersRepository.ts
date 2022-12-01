import { User } from '@/modules/users/typeorm/entities/User';

export interface IUsersRepository {
  create({username, email, password}): Promise<User>
  findByUsername(username: string): Promise<User>
}
