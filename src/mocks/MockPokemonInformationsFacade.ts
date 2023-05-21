import { PokemonInformationsRequestDTO } from "../dtos/requests/PokemonInformationsRequestDTO";
import { PaginatePokemonInformationsResponseDTO } from "../dtos/responses/PaginatePokemonInformationsResponseDTO";
import { PokemonInformationsResponseDTO } from "../dtos/responses/PokemonInformationsResponseDTO";
import { PokemonInformationsFacade } from "../facades/PokemonInformationsFacade";

export class MockPokemonInformationsFacade implements PokemonInformationsFacade {
  async getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<PaginatePokemonInformationsResponseDTO> {
    return createPaginatePokemonInformationsResponse();
  }

  async getById(id: number): Promise<PokemonInformationsResponseDTO | null> {
    return createPokemonInformationsResponse();
  }

  async save(pokemonRequestDTO: PokemonInformationsRequestDTO): Promise<PokemonInformationsResponseDTO> {
    return createPokemonInformationsResponse();
  }

  async update(id: number, pokemonRequestDTO: PokemonInformationsRequestDTO): Promise<PokemonInformationsResponseDTO | null> {
    return createPokemonInformationsResponse();
  }

  async deleteById(id: number): Promise<void> {}
}

export function createPaginatePokemonInformationsResponse(): PaginatePokemonInformationsResponseDTO {
  return new PaginatePokemonInformationsResponseDTO();
}

export function createPokemonInformationsResponse(): PokemonInformationsResponseDTO {
  return new PokemonInformationsResponseDTO();
}

export function createPokemonInformationsRequest(): PokemonInformationsRequestDTO {
  const result = new PokemonInformationsRequestDTO();
  result.name = "teste";
  return result;
}
