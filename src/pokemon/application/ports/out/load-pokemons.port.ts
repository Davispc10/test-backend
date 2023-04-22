export const LOAD_POKEMONS_PORT = 'LOAD_POKEMONS_PORT';
export interface LoadPokemonsPort {
  execute(): Promise<unknown[]>;
}
