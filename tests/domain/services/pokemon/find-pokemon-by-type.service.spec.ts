import { mockedPokemonEntity } from '@/tests/domain/mocks/pokemon.mock'
import { FindPokemonByTypeService } from '@/domain/services/pokemon'
import { type FindPokemonByTypeRepository } from '@/domain/contracts/repositories/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'
import { type PokemonEntity } from '@/domain/entities'

describe('FindPokemonByTypeService', () => {
  let sut: FindPokemonByTypeService
  let findPokemonByTypeRepository: MockProxy<FindPokemonByTypeRepository>
  let mockedPokemon: PokemonEntity

  beforeAll(() => {
    mockedPokemon = mockedPokemonEntity()
    findPokemonByTypeRepository = mock()
    findPokemonByTypeRepository.findByType.mockResolvedValue([mockedPokemon])
  })

  beforeEach(() => {
    sut = new FindPokemonByTypeService(findPokemonByTypeRepository)
  })

  it('should call FindPokemonByTypeRepository with correct typez', async () => {
    const command = { type: mockedPokemon.types[0].name }
    await sut.execute(command)

    expect(findPokemonByTypeRepository.findByType).toHaveBeenCalledWith(command.type)
    expect(findPokemonByTypeRepository.findByType).toHaveBeenCalledTimes(1)
  })

  it('should throw if FindPokemonByTypeRepository throws', async () => {
    const command = { type: mockedPokemon.types[0].name }
    const expectedError = new Error('find-pokemon-by-type-repository-error')
    findPokemonByTypeRepository.findByType.mockRejectedValueOnce(expectedError)

    await sut.execute(command).catch(error => {
      expect(error).toBe(expectedError)
    })
  })
})
