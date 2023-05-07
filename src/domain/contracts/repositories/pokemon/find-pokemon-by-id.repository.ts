import { type PokemonEntity } from '@/domain/entities'

export interface FindPokemonByIdRepository {
  find: (id: number) => Promise<PokemonEntity | undefined>
}
