const { getPokemons } = require('../../../src/controllers/pokemon.controller')

jest.mock('../../../src/controllers/pokemon.controller')

describe('Controller(Pokemon): getPokemons', () => {
	test('should retrieve an empty list with a zero count', async () => {
		const query = {
			test: 1,
		}
		const pokemonsResponse = await getPokemons({ query })

		expect(pokemonsResponse).toStrictEqual({ count: 0, pokemons: [] })
	})

	test('should retrieve a list with three count', async () => {
		const query = {}
		const pokemonsResponse = await getPokemons({ query })

		expect(pokemonsResponse).toStrictEqual({
			count: 3,
			pokemons: [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }],
		})
	})
})
