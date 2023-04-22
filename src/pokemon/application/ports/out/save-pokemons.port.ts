import Pokemon from '../../../domain/entity/pokemon';

export const SAVE_POKEMONS_PORT = 'SAVE_POKEMONS_PORT';
export interface SavePokemonsPort {
  execute(pokemons: Pokemon[]): Promise<void>;
}
