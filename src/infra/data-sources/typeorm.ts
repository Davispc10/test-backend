import { Pokemon } from "../../domain/entities";
import { DataSource } from "typeorm";
import path from "path";

export const AppDataSource =  new DataSource({
  type: "postgres",
  host: process.env.HOST_DB || "localhost",
  port: 5432,
  username: process.env.USER_DB || "docker",
  password: process.env.PASS_DB || "docker",
  database: process.env.DATABASE || "dinheirow",
  entities: [Pokemon],
  migrations: [path.join(__dirname, "../migrations/*.{js,ts}")],    
});