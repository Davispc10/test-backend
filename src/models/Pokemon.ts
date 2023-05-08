import mongoose from 'mongoose'
const { Schema } = mongoose

export const PokemonSchema = new Schema({
    row: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pokedexNumber: {
        type: Number,
        required: true
    },
    imgName: {
        type: String,
        required: true
    },
    generation: {
        type: Number,
        required: true
    },
    evolutionStage: {
        type: String,
        required: false
    },
    evolved: {
        type: Boolean,
        required: true
    },
    familyId: {
        type: Number,
        required: false
    },
    crossGen: {
        type: Boolean,
        required: true
    },
    type1: {
        type: String,
        required: true
    },
    type2: {
        type: String,
        required: false
    },
    weather1: {
        type: String,
        required: true
    },
    weather2: {
        type: String,
        required: false
    },
    statTotal: {
        type: Number,
        required: true
    },
    atk: {
        type: Number,
        required: true
    },
    def: {
        type: Number,
        required: true
    },
    sta: {
        type: Number,
        required: true
    },
    legendary: {
        type: Number,
        required: true
    },
    aquireable: {
        type: Number,
        required: true
    },
    spawns: {
        type: Boolean,
        required: true
    },
    regional: {
        type: Boolean,
        required: true
    },
    raidable: {
        type: Number,
        required: true
    },
    hatchable: {
        type: Number,
        required: true
    },
    shiny: {
        type: Boolean,
        required: true
    },
    nest: {
        type: Boolean,
        required: true
    },
    new: {
        type: Boolean,
        required: true
    },
    notGettable: {
        type: Boolean,
        required: true
    },
    futureEvolve: {
        type: Boolean,
        required: true
    },
    cp40: {
        type: Number,
        required: true
    },
    cp39: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const Pokemon = mongoose.model("Pokemon", PokemonSchema, "pokemons_collection")
