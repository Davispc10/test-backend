import { type PokemonEntity } from '@/domain/entities'
import { type ListPokemonRepository } from '@/domain/contracts/repositories/pokemon'

export class ListPokemonService {
  constructor (
    private readonly listPokemonRepository: ListPokemonRepository
  ) { }

  async execute (): Promise<PokemonEntity[]> {
    return this.listPokemonRepository.list()
  }
}
