import { type Controller } from '@/application/contracts'
import { ok, type HttpRequest, type HttpResponse, serverError } from '@/application/helpers'
import { type FindPokemonByTypeService } from '@/domain/services/pokemon'

export class FindPokemonByTypeController implements Controller {
  constructor (
    private readonly findPokemonByTypeService: FindPokemonByTypeService
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const command = { type: httpRequest.query.type }
      const pokemons = await this.findPokemonByTypeService.execute(command)
      return ok(pokemons)
    } catch (error) {
      return serverError(error)
    }
  }
}
