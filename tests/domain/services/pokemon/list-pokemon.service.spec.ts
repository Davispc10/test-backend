import { mockedPokemonEntity } from '@/tests/domain/mocks/pokemon.mock'
import { ListPokemonService } from '@/domain/services/pokemon'
import { type ListPokemonRepository } from '@/domain/contracts/repositories/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('ListPokemonService', () => {
  let sut: ListPokemonService
  let loadPokemonRepositoyry: MockProxy<ListPokemonRepository>

  beforeAll(() => {
    loadPokemonRepositoyry = mock()
    loadPokemonRepositoyry.list.mockResolvedValue([mockedPokemonEntity])
  })

  beforeEach(() => {
    sut = new ListPokemonService(loadPokemonRepositoyry)
  })

  it('should call ListPokemonReposity correctly', async () => {
    await sut.execute()

    expect(loadPokemonRepositoyry.list).toHaveBeenCalled()
    expect(loadPokemonRepositoyry.list).toHaveBeenCalledTimes(1)
  })

  it('should throw if ListPokemonRepository throws', async () => {
    const expectedError = new Error('list-pokemon-repository-error')
    loadPokemonRepositoyry.list.mockRejectedValueOnce(expectedError)

    await sut.execute().catch(error => {
      expect(error).toBe(expectedError)
    })
  })
})
