import { ok, type HttpRequest, type HttpResponse, serverError, notFound } from '@/application/helpers'
import { type FindPokemonByIdService } from '@/domain/services/pokemon'
import { type Controller } from '@/application/contracts'
import { NotFoundError } from '@/domain/errors'

export class FindPokemonByIdController implements Controller {
  constructor (
    private readonly findPokemonByIdService: FindPokemonByIdService
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pokemon = await this.findPokemonByIdService.execute({ id: httpRequest.params.id })
      return ok(pokemon)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error)
      return serverError(error)
    }
  }
}
