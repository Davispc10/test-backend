import { mockedPokemonEntity } from '@/tests/domain/mocks'
import { ListPokemonController } from '@/application/controllers'
import { ok, serverError } from '@/application/helpers'
import { type PokemonEntity } from '@/domain/entities'
import { type FindPokemonByTypeService, type ListPokemonService } from '@/domain/services/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('ListPokemonsController', () => {
  let sut: ListPokemonController
  let listPokemonsService: MockProxy<ListPokemonService>
  let findPokemonByTypeService: MockProxy<FindPokemonByTypeService>
  let mockedPokemon: PokemonEntity

  beforeAll(() => {
    listPokemonsService = mock()
    findPokemonByTypeService = mock()
    mockedPokemon = mockedPokemonEntity()
    listPokemonsService.execute.mockResolvedValue([mockedPokemon])
    findPokemonByTypeService.execute.mockResolvedValue([mockedPokemon])
  })

  beforeEach(() => {
    sut = new ListPokemonController(listPokemonsService, findPokemonByTypeService)
  })

  it('should call ListPokemonsService correctly', async () => {
    await sut.handle({})

    expect(listPokemonsService.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 500 if ListPokemonsService throws', async () => {
    const error = new Error('list-pokemon-service-error')
    const expectedResponse = serverError(error)
    listPokemonsService.execute.mockRejectedValueOnce(error)

    const actualResponse = await sut.handle({})

    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should call FindPokemonByTypeService with correct command', async () => {
    const httpRequest = { query: { type: 'any_type' } }
    const expectedCommand = { type: httpRequest.query.type }
    await sut.handle(httpRequest)

    expect(findPokemonByTypeService.execute).toHaveBeenCalledWith(expectedCommand)
    expect(findPokemonByTypeService.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 500 if FindPokemonByTypeService throws', async () => {
    const httpRequest = { query: { type: 'any_type' } }
    const error = new Error('find-pokemon-by-type-service-error')
    const expectedResponse = serverError(error)
    findPokemonByTypeService.execute.mockRejectedValueOnce(error)

    const actualResponse = await sut.handle(httpRequest)

    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should return 200 on success', async () => {
    const expectedResponse = ok([mockedPokemon])

    const actualResponse = await sut.handle({})

    expect(actualResponse).toEqual(expectedResponse)
  })
})
