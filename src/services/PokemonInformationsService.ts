import { PokemonInformationsEntity } from "../entities/PokemonInformationsEntity";

export interface PokemonInformationsService {
  getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<[PokemonInformationsEntity[], number]>;
  getById(id: number): Promise<PokemonInformationsEntity | null>;
  save(pokemonInformationsEntity: PokemonInformationsEntity): Promise<PokemonInformationsEntity>;
  update(id: number, pokemonInformationsEntity: PokemonInformationsEntity): Promise<PokemonInformationsEntity | null>;
  deleteById(id: number): Promise<void>;
}
