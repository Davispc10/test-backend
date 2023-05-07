import { mockedPokemonEntity } from '@/tests/domain/mocks'
import { FindPokemonByTypeController } from '@/application/controllers'
import { ok, serverError } from '@/application/helpers'
import { type PokemonEntity } from '@/domain/entities'
import { type FindPokemonByTypeService } from '@/domain/services/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('FindPokemonByTypeController', () => {
  let sut: FindPokemonByTypeController
  let findPokemonByTypeService: MockProxy<FindPokemonByTypeService>
  let mockedPokemon: PokemonEntity

  beforeAll(() => {
    findPokemonByTypeService = mock()
    mockedPokemon = mockedPokemonEntity()
    findPokemonByTypeService.execute.mockResolvedValue([mockedPokemon])
  })

  beforeEach(() => {
    sut = new FindPokemonByTypeController(findPokemonByTypeService)
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
    const httpRequest = { query: { type: 'any_type' } }
    const expectedResponse = ok([mockedPokemon])

    const actualResponse = await sut.handle(httpRequest)

    expect(actualResponse).toEqual(expectedResponse)
  })
})
