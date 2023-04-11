import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pokemon } from "../entities/Pokemon.entity"
import { CreatePokemonTable1681142317807 } from "./migration/1681142317807-createPokemonTable"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "pokeapi",
    password: "Pk09042023*",
    database: "poke_db",
    synchronize: false,
    logging: false,
    entities: [Pokemon],
    migrations: [CreatePokemonTable1681142317807],
    subscribers: [],
})
