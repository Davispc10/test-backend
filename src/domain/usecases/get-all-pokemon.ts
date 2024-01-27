import { Pokemon } from '../entities/pokemon'

export interface GetAllPokemonLoader {
  load: (filter: string, page: number, pageSize: number) => Promise<Pokemon[]>
}
