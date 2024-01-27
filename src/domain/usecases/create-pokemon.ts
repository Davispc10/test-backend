import { Pokemon } from '../entities/pokemon'

export interface CreatePokemonLoader {
  load: (data: Pokemon) => Promise<void>
}
