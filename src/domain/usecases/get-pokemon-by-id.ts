import { Pokemon } from '../entities/pokemon'

export interface GetPokemonByIdLoader {
  load: (id: string) => Promise<Pokemon>
}
