import { PokemonInformationsResponseDTO } from "./PokemonInformationsResponseDTO";

export class PaginatePokemonInformationsResponseDTO {
  data: PokemonInformationsResponseDTO[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}
