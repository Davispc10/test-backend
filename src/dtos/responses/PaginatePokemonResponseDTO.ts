import { PokemonResponseDTO } from "./PokemonResponseDTO";

export class PaginatePokemonResponseDTO {
  data: PokemonResponseDTO[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

//Math.ceil(total / pageSize)
