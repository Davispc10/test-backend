import { Pokemon } from '@/domain/entities'
import { GetAllPokemonLoader } from '@/domain/usecases'
import { GetAllPokemonRepository } from '@/data/contracts'

export class GetAllPokemonLoaderService implements GetAllPokemonLoader {
  constructor (
    private readonly pokemonRepository: GetAllPokemonRepository
    ) {}

  async load(filter: string, page: number, pageSize: number): Promise<Pokemon[]> {
    return this.pokemonRepository.getAllPokemon(filter, page, pageSize)
  }
}
