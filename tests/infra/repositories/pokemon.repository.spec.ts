import { makeFakeDb } from '@/tests/infra/mocks'
import { mockedPokemonEntity } from '@/tests/domain/mocks'
import { type PokemonEntity } from '@/domain/entities'
import { PokemonRepository } from '@/infra/db/repositories'
import { PgPokedex, PgPokemon, PgPokemonFamily, PgPokemonType, PgPokemonWeather } from '@/infra/db/entities'

import { type IBackup } from 'pg-mem'
import { type Repository } from 'typeorm'

describe('PokemonRepository', () => {
  let sut: PokemonRepository
  let emptyBackup: IBackup
  let backup: IBackup
  let pokemonPgRepository: Repository<PgPokemon>
  let mockedPokemon: PokemonEntity

  beforeAll(async () => {
    const { db, dataSource } = await makeFakeDb()
    emptyBackup = db.backup()
    pokemonPgRepository = dataSource.manager.getRepository(PgPokemon)
    mockedPokemon = mockedPokemonEntity()
    const pokedexRepository = dataSource.manager.getRepository(PgPokedex)
    const pokemonFamilyRepository = dataSource.manager.getRepository(PgPokemonFamily)
    const pokemonTypeRepository = dataSource.manager.getRepository(PgPokemonType)
    const pokemonWeatherRepository = dataSource.manager.getRepository(PgPokemonWeather)
    await pokedexRepository.save(mockedPokemon.pokedex)
    await pokemonFamilyRepository.save(mockedPokemon.family)
    await pokemonTypeRepository.save(mockedPokemon.types)
    await pokemonWeatherRepository.save(mockedPokemon.weathers)
    await pokemonPgRepository.save(mockedPokemon)
    backup = db.backup()
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
      emptyBackup.restore()

      const pokemons = await sut.list()

      expect(pokemons.length).toBe(0)
    })
  })

  describe('find(id: number)', () => {
    it('should return a pokemon on success', async () => {
      backup.restore()

      const pokemon = await sut.find(mockedPokemon.id)

      expect(pokemon).toBeTruthy()
    })

    it('should return undefined if no pokemon was found', async () => {
      emptyBackup.restore()

      const pokemon = await sut.find(mockedPokemon.id)

      expect(pokemon).toBeFalsy()
    })
  })

  describe('findByType(type: string)', () => {
    it('should return a list of pokemons on success', async () => {
      backup.restore()

      const pokemons = await sut.findByType(mockedPokemon.types[0].name)

      expect(pokemons).toBeTruthy()
    })

    it('should return an empty array if no pokemon was found', async () => {
      emptyBackup.restore()

      const pokemon = await sut.find(mockedPokemon.id)

      expect(pokemon).toBeFalsy()
    })
  })
})
