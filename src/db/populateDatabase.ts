import { returnPokemonsData } from "./extratcData"
import { searchPokemons } from "../services/searchService"

const { Pokemon: PokemonSchema } = require("../models/Pokemon")

export const addPokemonstoDatabase = async(): Promise<void> => {
    try {
        if(!await searchPokemons.isAlreadyPopulated()) {
            returnPokemonsData().then(data => {
                PokemonSchema.insertMany(data)
            }).then(() => console.log(`Populate pokemons_collection successful`))
        } else {
            console.log(`pokemons_collection already populated`)
        }
    } catch (error) {
        console.log(`Create pokemon error: ${error}`)
    }
}
