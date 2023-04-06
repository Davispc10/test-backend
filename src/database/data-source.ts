import "reflect-metadata";
import { DataSource } from "typeorm";
import Pokemon from "../api/v1/entity/Pokemon";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "dinheirow",
  password: "t3st-back3nd",
  database: "dinheirow",
  synchronize: false,
  logging: false,
  entities: [Pokemon],
  migrations: ["src/database/migration/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database has been initialized");
  })
  .catch((error) => console.log(error));

export { AppDataSource };
