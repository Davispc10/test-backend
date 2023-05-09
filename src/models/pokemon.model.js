const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const PokemonSchema = new Schema({
	id: ObjectId,
	name: String,
	pokedex: Number,
	imageRef: Schema.Types.Mixed,
	generation: Number,
	evolutionStage: { type: Schema.Types.Mixed, required: false },
	evolved: Number,
	familyID: { type: Number, required: false },
	crossGen: Number,
	type1: String,
	type2: { type: String, required: false },
	weather1: String,
	weather2: { type: String, required: false },
	statTotal: Number,
	atk: Number,
	def: Number,
	sta: Number,
	legendary: Number,
	aquireable: Number,
	spawns: Number,
	regional: Number,
	raidable: Number,
	hatchable: Number,
	shiny: Number,
	nest: Number,
	new: Number,
	notGettable: Number,
	futureEvolve: Number,
	cp40: Number,
	cp39: Number,
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
