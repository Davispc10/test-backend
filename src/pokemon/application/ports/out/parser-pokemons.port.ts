import Pokemon from '../../../domain/entity/pokemon';

export const PARSER_POKEMONS_PORT = 'PARSER_POKEMONS_PORT';
export interface ParserPokemonsPort {
  execute(pokemons: unknown[]): Pokemon[];
}
