import { Pokemon } from '@/domain/entities'
import { PokemonNotFoundError } from '@/domain/errors'
import { GetPokemonByIdLoader } from '@/domain/usecases/get-pokemon-by-id'
import { Controller, HttpResponse, serverError, ok, notFound } from '@/presentation/contracts'

export class GetPokemonByIdController implements Controller {
  constructor (private readonly getPokemonByIdLoader: GetPokemonByIdLoader) {}

  async handle (req): Promise<HttpResponse<Pokemon[]>> {
    try {
      const { id } = req.params
      const pokemons = await this.getPokemonByIdLoader.load(id)
      
      return ok(pokemons)
    } catch (error) {
      if (error.name === "PokemonNotFoundError") {
        return notFound(error);
      }
      return serverError(error)
    }
  }
}
