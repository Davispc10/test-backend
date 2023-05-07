import { type Controller } from '@/application/contracts'
import { ok, type HttpRequest, type HttpResponse, serverError, notFound } from '@/application/helpers'
import { NotFoundError } from '@/domain/errors'
import { type FindPokemonByIdService } from '@/domain/services/pokemon'

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
