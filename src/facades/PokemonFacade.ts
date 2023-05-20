import { PokemonRequestDTO } from "../dtos/requests/PokemonRequestDTO";
import { PaginatePokemonResponseDTO } from "../dtos/responses/PaginatePokemonResponseDTO";
import { PokemonResponseDTO } from "../dtos/responses/PokemonResponseDTO";

export interface PokemonFacade {
  getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<PaginatePokemonResponseDTO>;
  getById(id: number): Promise<PokemonResponseDTO | null>;
  save(pokemonRequestDTO: PokemonResponseDTO): Promise<PokemonResponseDTO>;
  update(id: number, pokemonRequestDTO: PokemonRequestDTO): Promise<PokemonResponseDTO | null>;
  deleteById(id: number): Promise<void>;
}
