import { DataSource } from 'typeorm';

require('dotenv').config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['src/**/entities/*{.ts,.js}'],
  migrations: ['src/**/migrations/*.{ts,js}'],
  synchronize: false,
});
