import { Pokemon } from '@/domain/entities'

export interface CreatePokemonRepository {
  createPokemon: (data: Pokemon[]) => Promise<void>;
  countPokemons(): Promise<number>;
}
