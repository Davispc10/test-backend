import { Pokemon } from '@/domain/entities'
import { GetPokemonByIdRepository } from '@/data/contracts'
import { GetPokemonByIdLoader } from '@/domain/usecases/get-pokemon-by-id'
import { PokemonNotFoundError } from '@/domain/errors';

export class GetPokemonByIdLoaderService implements GetPokemonByIdLoader {
  constructor(
    private readonly pokemonRepository: GetPokemonByIdRepository
  ) { }


  async load(id: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.getPokemonById(id);
    if (!pokemon) throw new PokemonNotFoundError()
    return pokemon
  }
}
