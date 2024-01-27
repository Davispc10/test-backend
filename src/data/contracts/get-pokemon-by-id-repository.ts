import { Pokemon } from '@/domain/entities'

export interface GetPokemonByIdRepository {
  getPokemonById: (id: string) => Promise<Pokemon>
}
