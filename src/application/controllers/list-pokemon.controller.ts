import { type Controller } from '@/application/contracts'
import { ok, type HttpRequest, type HttpResponse, serverError } from '@/application/helpers'
import { type FindPokemonByTypeService, type ListPokemonService } from '@/domain/services/pokemon'

export class ListPokemonController implements Controller {
  constructor (
    private readonly listPokemonsService: ListPokemonService,
    private readonly findPokemonByTypeService: FindPokemonByTypeService
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      let pokemons
      if (httpRequest?.query?.type) {
        pokemons = await this.findPokemonByTypeService.execute({ type: httpRequest.query.type })
      } else {
        pokemons = await this.listPokemonsService.execute()
      }
      return ok(pokemons)
    } catch (error) {
      return serverError(error)
    }
  }
}
