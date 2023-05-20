import { PokemonEntity } from "../entities/PokemonInformationsEntity";

export {};

declare global {
  namespace Express {
    export interface Request {
      pokemonEntity?: PokemonEntity;
    }
  }
}
