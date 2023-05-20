import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { PokemonInformationsEntity } from "../entities/PokemonInformationsEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_URL || "postgres-db",
  port: 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PW || "postgres",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [PokemonInformationsEntity],
});

AppDataSource.initialize()
  .then(() => {
    console.log("db initialized");
  })
  .catch((err) => {
    console.error(err);
  });
