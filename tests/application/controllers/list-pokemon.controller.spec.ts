import { mockedPokemonEntity } from '@/tests/domain/mocks'
import { ListPokemonController } from '@/application/controllers'
import { ok, serverError } from '@/application/helpers'
import { type PokemonEntity } from '@/domain/entities'
import { type ListPokemonService } from '@/domain/services/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('ListPokemonsController', () => {
  let sut: ListPokemonController
  let listPokemonsService: MockProxy<ListPokemonService>
  let mockedPokemon: PokemonEntity

  beforeAll(() => {
    listPokemonsService = mock()
    mockedPokemon = mockedPokemonEntity()
    listPokemonsService.execute.mockResolvedValue([mockedPokemon])
  })

  beforeEach(() => {
    sut = new ListPokemonController(listPokemonsService)
  })

  it('should call ListPokemonsService correctly', async () => {
    await sut.handle({})

    expect(listPokemonsService.execute).toHaveBeenCalled()
    expect(listPokemonsService.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 500 if ListPokemonsService throws', async () => {
    const error = new Error('list-pokemon-service-error')
    const expectedResponse = serverError(error)
    listPokemonsService.execute.mockRejectedValueOnce(error)

    const actualResponse = await sut.handle({})

    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should return 200 on success', async () => {
    const expectedResponse = ok([mockedPokemon])

    const actualResponse = await sut.handle({})

    expect(actualResponse).toEqual(expectedResponse)
  })
})
