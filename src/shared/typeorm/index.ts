import { DataSource } from 'typeorm';
import { User } from '../../modules/users/typeorm/entities/User';
import { Pokemon } from '../../modules/pokemons/typeorm/entities/Pokemon';
import { default1669850986007 } from './migrations/1669850986007-default';


require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [User, Pokemon],
        migrations: [default1669850986007],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User, Pokemon],
  migrations: [default1669850986007],
  synchronize: false,
});
