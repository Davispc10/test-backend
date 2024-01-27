import { Pokemon } from '@/domain/entities'
import { GetAllPokemonLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'

export class GetAllPokemonController implements Controller {
  constructor (private readonly getAllPokemonLoader: GetAllPokemonLoader) {}

  async handle (req): Promise<HttpResponse<Pokemon[]>> {
    try {
      const pokemons = await this.getAllPokemonLoader.load(req.query.filter, req.query.page, req.query.pageSize)
      return ok(pokemons)
    } catch (error) {
      return serverError(error)
    }
  }
}
