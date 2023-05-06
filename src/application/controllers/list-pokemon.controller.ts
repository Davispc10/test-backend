import { type Controller } from '@/application/contracts'
import { ok, type HttpRequest, type HttpResponse, serverError } from '@/application/helpers'
import { type ListPokemonService } from '@/domain/services/pokemon'

export class ListPokemonController implements Controller {
  constructor (
    private readonly listPokemonsService: ListPokemonService
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pokemons = await this.listPokemonsService.execute()
      return ok(pokemons)
    } catch (error) {
      return serverError(error)
    }
  }
}
