import { mockedPokemonEntity } from '@/tests/domain/mocks'
import { FindPokemonByIdController } from '@/application/controllers'
import { notFound, ok, serverError } from '@/application/helpers'
import { type PokemonEntity } from '@/domain/entities'
import { type FindPokemonByIdService } from '@/domain/services/pokemon'

import { mock, type MockProxy } from 'jest-mock-extended'
import { NotFoundError } from '@/domain/errors'

describe('FindPokemonByIdController', () => {
  let sut: FindPokemonByIdController
  let findPokemonByIdService: MockProxy<FindPokemonByIdService>
  let mockedPokemon: PokemonEntity

  beforeAll(() => {
    findPokemonByIdService = mock()
    mockedPokemon = mockedPokemonEntity()
    findPokemonByIdService.execute.mockResolvedValue(mockedPokemon)
  })

  beforeEach(() => {
    sut = new FindPokemonByIdController(findPokemonByIdService)
  })

  it('should call FindPokemonByIdService with correct command', async () => {
    const httpRequest = { params: { id: 1 } }
    const expectedCommand = { id: httpRequest.params.id }
    await sut.handle(httpRequest)

    expect(findPokemonByIdService.execute).toHaveBeenCalledWith(expectedCommand)
    expect(findPokemonByIdService.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 404 if FindPokemonByIdService throws a NotFoundError', async () => {
    const httpRequest = { params: { id: 1 } }
    const error = new NotFoundError('list-pokemon-service-error')
    const expectedResponse = notFound(error)
    findPokemonByIdService.execute.mockRejectedValueOnce(error)

    const actualResponse = await sut.handle(httpRequest)

    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should return 500 if FindPokemonByIdService throws', async () => {
    const httpRequest = { params: { id: 1 } }
    const error = new Error('list-pokemon-service-error')
    const expectedResponse = serverError(error)
    findPokemonByIdService.execute.mockRejectedValueOnce(error)

    const actualResponse = await sut.handle(httpRequest)

    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should return 200 on success', async () => {
    const httpRequest = { params: { id: 1 } }
    const expectedResponse = ok(mockedPokemon)

    const actualResponse = await sut.handle(httpRequest)

    expect(actualResponse).toEqual(expectedResponse)
  })
})
