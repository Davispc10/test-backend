import { PokemonInformationsRequestDTO } from "../dtos/requests/PokemonInformationsRequestDTO";
import { PaginatePokemonInformationsResponseDTO } from "../dtos/responses/PaginatePokemonInformationsResponseDTO";
import { PokemonInformationsResponseDTO } from "../dtos/responses/PokemonInformationsResponseDTO";

export interface PokemonInformationsFacade {
  getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<PaginatePokemonInformationsResponseDTO>;
  getById(id: number): Promise<PokemonInformationsResponseDTO | null>;
  save(pokemonRequestDTO: PokemonInformationsRequestDTO): Promise<PokemonInformationsResponseDTO>;
  update(id: number, pokemonRequestDTO: PokemonInformationsRequestDTO): Promise<PokemonInformationsResponseDTO | null>;
  deleteById(id: number): Promise<void>;
}
