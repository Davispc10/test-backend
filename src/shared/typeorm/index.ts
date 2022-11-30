import { DataSource } from 'typeorm';
import { User } from '@/modules/users/typeorm/entities/User';
import { Pokemon } from '@/modules/pokemons/typeorm/entities/Pokemon';

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
        migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
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
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  synchronize: false,
});
