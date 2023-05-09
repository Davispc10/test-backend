const Pokemon = require('../models/pokemon.model')

const countPokemons = async (query = undefined) =>
	await Pokemon.countDocuments(query)

const findPokemons = async ({ query, startIndex, limit }) =>
	await Pokemon.find(query).skip(startIndex).limit(limit)

const getPokemons = async ({ query = undefined, startIndex, limit }) => {
	const count = await countPokemons(query)
	let pokemons = []

	if (count > 0) {
		pokemons = await findPokemons({ query, startIndex, limit })
	}

	return { count, pokemons }
}

module.exports = { getPokemons }
