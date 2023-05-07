import { type PokemonEntity } from '@/domain/entities'

export interface FindPokemonByTypeRepository {
  findByType: (type: string) => Promise<PokemonEntity[]>
}
