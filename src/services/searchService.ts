import { Pokemon } from '../models/Pokemon'

export const searchPokemons = {
    getAll: async function() {
        try {
            const pokemons = await Pokemon.find({})
            return pokemons
        } catch (error) {
            console.log(`Error finding pokemons: ${error}`)
        }
    },

    findByName: async function(name:String) {
        try {
            const pokemon = await Pokemon.findOne({ name: name })
            return pokemon
        } catch (error) {
            console.log(`Error finding pokemon: ${error}`)
        }
    },

    isAlreadyPopulated: async function() {
        try {
            const pokemons = await Pokemon.find({})
            return pokemons.length > 0 ? true : false
        } catch (error) {
            console.log(`Error finding pokemons: ${error}`)
        }
    },

    findPage: async function(page:number, pageSize:number) {
        try {
            const pokemonPage = await Pokemon.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize);
            return pokemonPage
        } catch (error) {
            console.log(`Error finding page: ${error}`);
        }
    },
}
