import Battle from "./Battle";

interface PokemonFilter {
  generation?: number;
  type?: string;
  weather?: string;
  legendary?: number;
}

export type { PokemonFilter };
export { Battle };
