import { container } from 'tsyringe';
import { IUsersRepository } from '@/modules/users/IUsersRepository';
import { UsersRepository } from '@/modules/users/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)
