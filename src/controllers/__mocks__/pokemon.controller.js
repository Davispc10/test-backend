const countPokemonsMock = (query = undefined) =>
	new Promise((r, e) => {
		const count = query?.test === 1 ? 0 : 3

		r(count)
	})

const findPokemonsMock = ({ query, startIndex, limit }) =>
	new Promise((r, e) => {
		if (query?.test === 1) return r([])
		return r([{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }])
	})

const getPokemonsMock = async ({ query = undefined, startIndex, limit }) => {
	const count = await countPokemonsMock(query)
	let pokemons = []

	if (count > 0) {
		pokemons = await findPokemonsMock({ query, startIndex, limit })
	}

	return { count, pokemons }
}

module.exports = {
	getPokemons: getPokemonsMock,
}
