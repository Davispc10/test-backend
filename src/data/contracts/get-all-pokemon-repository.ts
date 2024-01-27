import { Pokemon } from '@/domain/entities'

export interface GetAllPokemonRepository {
  getAllPokemon: (filter: string, page: number, pageSize: number) => Promise<Pokemon[]>
}
