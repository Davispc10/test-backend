const mongoose = require('../database');

const PokeSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    pokedexNumber:{
        type: Number,
        unique: true,
        required: true,
    },
    imgName:{
        type: String,
        required: true,
    },
    generation:{
        type: Number,
        required: true,
    },
    evolutionStage:{
        type: String,
    },
    evolved:{
        type: Boolean,
        required: true
    },
    familyId:{
        type: Number
    },
    crossGen:{
        type: Boolean,
        required: true
    },
    type1:{
        type: String,
        required: true
    },
    type2:{
        type: String,
    },
    weather1:{
        type: String,
        required: true
    },
    weather2:{
        type: String
    },
    statTotal:{
        type: Number,
        required: true
    },
    atk:{
        type: Number,
        required: true
    },
    def:{
        type: Number,
        required: true
    },
    sta:{
        type: Number,
        required: true
    },
    legendary:{
        type: Boolean,
        required: true
    },
    aquireable:{
        type: Number,
        required: true
    },
    spawns:{
        type: Boolean,
        required: true
    },
    regional:{
        type: Boolean,
        required: true
    },
    raidable:{
        type: Number,
        required: true
    },
    hatchable:{
        type: Number,
        required: true
    },
    shiny:{
        type: Boolean,
        required: true
    },
    nest:{
        type: Boolean,
        required: true
    },
    new:{
      type: Boolean,
      required: true
    },
    noteGettable:{
        type: Boolean,
        required: true
    },
    futureEvolve:{
        type: Boolean,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
});

const Pokemon = mongoose.model('Pokemon', PokeSchema);

module.exports = Pokemon;