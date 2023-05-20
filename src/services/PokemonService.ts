import { PokemonEntity } from "../entities/PokemonEntity";

export interface PokemonService {
  getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<[PokemonEntity[], number]>;
  getById(id: number): Promise<PokemonEntity | null>;
  save(pokemonEntity: PokemonEntity): Promise<PokemonEntity>;
  update(id: number, pokemonEntity: PokemonEntity): Promise<PokemonEntity | null>;
  deleteById(id: number): Promise<void>;
}
