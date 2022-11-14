import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import * as env from 'dotenv';
env.config();

export const testingModule = () => [
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    synchronize: true,
    entities: [Pokemon],
  }),
  TypeOrmModule.forFeature([Pokemon]),
];
