import { describe, expect, it, vi } from 'vitest'
import xlsx from 'xlsx'
import { PokemonRepository } from '../../src/application/repositories/pokemon-repository'
import { Pagination } from '../../src/shared/constants'
import { PokemonRepositoryFake } from '../database/repositories/pokemon-repository-fake'
import pokemonsData from '../pokemons.json'
import { GetPokemons, UploadFile } from './../../src/application/use-cases'

describe('[testes de integração] verificando caso de uso de buscar todos os pokemons xlsx', () => {
  const maxPokemons = 20
  const workbook = xlsx.utils.book_new()
  const worksheet = xlsx.utils.json_to_sheet(pokemonsData.slice(0, maxPokemons))
  xlsx.utils.book_append_sheet(workbook, worksheet, 'sheet')
  const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' })

  it('deve buscar todos os pokemons (teste com fake e spy)', async () => {
    const pokemonRepositoryFake = new PokemonRepositoryFake()
    const pokemonRepositoryFindAllSpy = vi.spyOn(pokemonRepositoryFake, 'findAll')
    const uploadFile = new UploadFile(pokemonRepositoryFake)
    const getPokemons = new GetPokemons(pokemonRepositoryFake)
    await uploadFile.execute(buffer)
    const limit = 10
    const pokemons = await getPokemons.execute({
      paginationParams: {
        limit: limit,
        offset: Pagination.DEFAULT_OFFSET,
      },
    })
    expect(pokemonRepositoryFindAllSpy).toHaveBeenCalledOnce()
    expect(pokemons).toHaveLength(limit)
  })

  it('deve deletar todos os pokemons e salvar os pokemons do arquivo (teste com stub)', async () => {
    const pokemonRepositoryStub: PokemonRepository = {
      findAll: vi.fn().mockResolvedValue(Promise.resolve([{}, {}])),
      findAllByPokedexRef: vi.fn(),
      findOneById: vi.fn(),
      saveAll: vi.fn().mockResolvedValue(Promise.resolve()),
    }
    const uploadFile = new UploadFile(pokemonRepositoryStub)
    const getPokemons = new GetPokemons(pokemonRepositoryStub)
    await uploadFile.execute(buffer)
    const pokemons = await getPokemons.execute({
      paginationParams: {
        limit: Pagination.DEFAULT_LIMIT,
        offset: Pagination.DEFAULT_OFFSET,
      },
    })
    expect(pokemons).toHaveLength(2)
  })
})
