import "reflect-metadata"
import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/users/IUsersRepository';
import { UsersRepository } from '../../modules/users/typeorm/repositories/UsersRepository';
import { IPokemonsRepository } from '../../modules/pokemons/IPokemonsRepository';
import { PokemonsRepository } from '../../modules/pokemons/typeorm/repositories/PokemonsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPokemonsRepository>(
  'PokemonsRepository',
  PokemonsRepository,
);
