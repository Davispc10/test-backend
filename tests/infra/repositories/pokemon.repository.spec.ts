import { makeFakeDb } from '@/tests/infra/mocks'
import { mockedPokemonEntity } from '@/tests/domain/mocks'
import { PokemonRepository } from '@/infra/db/repositories'
import { PgPokedex, PgPokemon, PgPokemonFamily, PgPokemonType, PgPokemonWeather } from '@/infra/db/entities'

import { type IBackup } from 'pg-mem'
import { type Repository } from 'typeorm'

describe('PokemonRepository', () => {
  let sut: PokemonRepository
  let backup: IBackup
  let pokemonPgRepository: Repository<PgPokemon>

  beforeAll(async () => {
    const { db, dataSource } = await makeFakeDb()
    backup = db.backup()
    pokemonPgRepository = dataSource.manager.getRepository(PgPokemon)
    const mockedPokemon = mockedPokemonEntity()
    const pokedexRepository = dataSource.manager.getRepository(PgPokedex)
    const pokemonFamilyRepository = dataSource.manager.getRepository(PgPokemonFamily)
    const pokemonTypeRepository = dataSource.manager.getRepository(PgPokemonType)
    const pokemonWeatherRepository = dataSource.manager.getRepository(PgPokemonWeather)
    await pokedexRepository.save(mockedPokemon.pokedex)
    await pokemonFamilyRepository.save(mockedPokemon.family)
    await pokemonTypeRepository.save(mockedPokemon.type)
    await pokemonWeatherRepository.save(mockedPokemon.weather)
    await pokemonPgRepository.save(mockedPokemon)
  })

  beforeEach(() => {
    sut = new PokemonRepository(pokemonPgRepository)
  })

  describe('list()', () => {
    it('should return all pokemons on success', async () => {
      const pokemons = await sut.list()

      expect(pokemons.length).toBe(1)
    })

    it('should return an empty array if there is no pokemons on database', async () => {
      backup.restore()

      const tags = await sut.list()

      expect(tags.length).toBe(0)
    })
  })
})
