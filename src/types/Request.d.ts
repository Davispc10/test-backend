import { PokemonEntity } from "../entities/PokemonEntity";

export {};

declare global {
  namespace Express {
    export interface Request {
      pokemonEntity?: PokemonEntity;
    }
  }
}
