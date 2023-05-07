import { PgPokedex, PgPokemon, PgPokemonFamily, PgPokemonType, PgPokemonWeather } from '@/infra/db/entities'
import { postgresDataSource } from '@/infra/db/helpers'

import csvtojson from 'csvtojson'

export class PokemonSeed {
  static async execute (): Promise<void> {
    const rawData = await csvtojson({ delimiter: ';' }).fromFile('pokemon_go.csv')

    let id = 1

    const rawPokemonWeathers = rawData.flatMap(pokemon => [pokemon.weather_1, pokemon.weather_2])
    const normalizedPokemonWeathers = [...new Set(rawPokemonWeathers)]
    const filteredPokemonWeathers = normalizedPokemonWeathers.filter(pokemonWeather => pokemonWeather !== '')
    const pokemonWeathers = filteredPokemonWeathers.map(pokemonWeather => ({ id: id++, name: pokemonWeather }))

    const rawPokemonTypes = rawData.flatMap(pokemon => [pokemon.type_1, pokemon.type_2])
    const normalizedPokemonTypes = [...new Set(rawPokemonTypes)]
    const filteredPokemonType = normalizedPokemonTypes.filter(pokemonType => pokemonType !== '')
    id = 1
    const pokemonTypes = filteredPokemonType.map(pokemonType => ({ id: id++, name: pokemonType }))

    const rawPokemonFamilies = rawData.map(pokemon => parseInt(pokemon.family_id))
    const normalizedPokemonFamilies = [...new Set(rawPokemonFamilies)]
    const filteredPokemonFamilies = normalizedPokemonFamilies.filter(pokemonFamily => !isNaN(pokemonFamily))
    const pokemonFamilies = filteredPokemonFamilies.map(pokemonFamily => ({ id: pokemonFamily, name: `family_${pokemonFamily}` }))

    const rawPokedexes = rawData.map(pokemon => pokemon.pokedex_id)
    const normalizedPokedexes = [...new Set(rawPokedexes)]
    const pokedexes = normalizedPokedexes.map(pokedex => ({ id: pokedex, name: `pokedex_${pokedex}` }))

    await postgresDataSource.initialize()

    const pokemonRepository = postgresDataSource.manager.getRepository(PgPokemon)
    const pokedexRepository = postgresDataSource.manager.getRepository(PgPokedex)
    const pokemonFamilyRepository = postgresDataSource.manager.getRepository(PgPokemonFamily)
    const pokemonTypeRepository = postgresDataSource.manager.getRepository(PgPokemonType)
    const pokemonWeatherRepository = postgresDataSource.manager.getRepository(PgPokemonWeather)

    const promises = [
      pokedexRepository.save(pokedexes),
      pokemonFamilyRepository.save(pokemonFamilies),
      pokemonTypeRepository.save(pokemonTypes),
      pokemonWeatherRepository.save(pokemonWeathers)
    ]

    await Promise.all(promises)

    id = 1
    const normalizedPokemons = rawData.map(pokemon => {
      const weathers = pokemonWeathers.filter(pokemonWeather => pokemonWeather.name === pokemon.weather_1 || pokemonWeather.name === pokemon.weather_2)
      const types = pokemonTypes.filter(pokemonType => pokemonType.name === pokemon.type_1 || pokemonType.name === pokemon.type_2)
      const family = pokemonFamilies.filter(pokemonFamily => pokemonFamily.id === parseInt(pokemon.family_id))
      const pokedex = pokedexes.filter(pokedex => pokedex.id === pokemon.pokedex_id)
      return {
        ...pokemon,
        id: id++,
        imgName: pokemon.img_name,
        evolutionStage: pokemon.evolution_stage,
        crossGen: pokemon.cross_gen,
        notGettable: pokemon.not_gettable,
        futureEvolve: pokemon.future_evolve,
        cp40: pokemon.cp_40,
        cp39: pokemon.cp_39,
        weathers,
        types,
        family: family[0],
        pokedex: pokedex[0]
      }
    })

    await pokemonRepository.save(normalizedPokemons)
  }
}

PokemonSeed.execute()
  .then()
  .catch(err => { console.log(err) })
