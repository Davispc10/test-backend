import { mockedPokemonEntity } from '@/tests/domain/mocks/pokemon.mock'
import { ListPokemonService } from '@/domain/services/pokemon'
import { type ListPokemonRepository } from '@/domain/contracts/repositories/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('ListPokemonService', () => {
  let sut: ListPokemonService
  let listPokemonRepository: MockProxy<ListPokemonRepository>

  beforeAll(() => {
    listPokemonRepository = mock()
    listPokemonRepository.list.mockResolvedValue([mockedPokemonEntity()])
  })

  beforeEach(() => {
    sut = new ListPokemonService(listPokemonRepository)
  })

  it('should call ListPokemonReposity correctly', async () => {
    await sut.execute()

    expect(listPokemonRepository.list).toHaveBeenCalled()
    expect(listPokemonRepository.list).toHaveBeenCalledTimes(1)
  })

  it('should throw if ListPokemonRepository throws', async () => {
    const expectedError = new Error('list-pokemon-repository-error')
    listPokemonRepository.list.mockRejectedValueOnce(expectedError)

    await sut.execute().catch(error => {
      expect(error).toBe(expectedError)
    })
  })
})
