import { mockedPokemonEntity } from '@/tests/domain/mocks/pokemon.mock'
import { type PokemonEntity } from '@/domain/entities'
import { NotFoundError } from '@/domain/errors'
import { FindPokemonByIdService } from '@/domain/services/pokemon'
import { type FindPokemonByIdRepository } from '@/domain/contracts/repositories/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('FindPokemonByIdService', () => {
  let sut: FindPokemonByIdService
  let findPokemonByIdRepository: MockProxy<FindPokemonByIdRepository>
  let pokemonEntity: PokemonEntity

  beforeAll(() => {
    pokemonEntity = mockedPokemonEntity()
    findPokemonByIdRepository = mock()
    findPokemonByIdRepository.find.mockResolvedValue(pokemonEntity)
  })

  beforeEach(() => {
    sut = new FindPokemonByIdService(findPokemonByIdRepository)
  })

  it('should call FindPokemonByIdRepository with correct id', async () => {
    const command = { id: 1 }

    await sut.execute(command)

    expect(findPokemonByIdRepository.find).toHaveBeenCalledWith(command.id)
    expect(findPokemonByIdRepository.find).toHaveBeenCalledTimes(1)
  })

  it('should throw if FindPokemonByIdRepository throws', async () => {
    const command = { id: 1 }
    const expectedError = new Error('find-pokemon-by-id-repository-error')
    findPokemonByIdRepository.find.mockRejectedValueOnce(expectedError)

    await sut.execute(command).catch(error => {
      expect(error).toBe(expectedError)
    })
  })

  it('should throw a not found error if no pokemon was found', async () => {
    const command = { id: 1 }
    const expectedError = new NotFoundError(`There is no pokemon for id = ${command.id}!`)
    findPokemonByIdRepository.find.mockResolvedValueOnce(undefined)

    await sut.execute(command).catch(error => {
      expect(error).toEqual(expectedError)
    })
  })

  it('should return a PokemonEntity on success', async () => {
    const command = { id: 1 }
    const expectedResult = pokemonEntity

    const result = await sut.execute(command)

    expect(result).toEqual(expectedResult)
  })
})
