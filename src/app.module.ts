import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedsModule } from './database/seeds/seeds.module';

@Module({
  imports: [
    PokemonModule,
    SeedsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      synchronize: true,
      entities: ['dist/**/entities/*.entity.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
