import "reflect-metadata"
import { DataSource } from "typeorm"
import Pokemon from "../api/v1/entity/Pokemon"

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "pokemon.db",
    entities: [Pokemon],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database has been initialized")
    })
    .catch((error) => console.log(error))

export { AppDataSource }