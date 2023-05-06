import { type PokemonEntity } from '@/domain/entities'

export interface ListPokemonRepository {
  list: () => Promise<PokemonEntity[]>
}
