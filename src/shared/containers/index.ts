import 'reflect-metadata';
import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/users/domain/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import { IPokemonsRepository } from '../../modules/pokemons/domain/repositories/IPokemonsRepository';
import { PokemonsRepository } from '../../modules/pokemons/infra/typeorm/repositories/PokemonsRepository';
import { IHashProvider } from '../../modules/users/providers/HashProvider/models/IHashProvider';
import BcryptHashProvider from '../../modules/users/providers/HashProvider/implementations/BcryptHashProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPokemonsRepository>(
  'PokemonsRepository',
  PokemonsRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
