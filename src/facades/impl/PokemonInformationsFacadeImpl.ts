import { PokemonInformationsRequestDTO } from "../../dtos/requests/PokemonInformationsRequestDTO";
import { PaginatePokemonInformationsResponseDTO } from "../../dtos/responses/PaginatePokemonInformationsResponseDTO";
import { PokemonInformationsResponseDTO } from "../../dtos/responses/PokemonInformationsResponseDTO";
import { PokemonInformationsEntity } from "../../entities/PokemonInformationsEntity";
import { PokemonInformationsService } from "../../services/PokemonInformationsService";
import { PokemonInformationsFacade } from "../PokemonInformationsFacade";

export class PokemonInformationsFacadeImpl implements PokemonInformationsFacade {
  private pokemonService: PokemonInformationsService;

  constructor(pokemonService: PokemonInformationsService) {
    this.pokemonService = pokemonService;
  }

  async getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<PaginatePokemonInformationsResponseDTO> {
    const [result, total] = await this.pokemonService.getAll(page, pageSize, type1, type2, name, pokedexNumber);
    const paginatePokemonResponseDTO = new PaginatePokemonInformationsResponseDTO();

    paginatePokemonResponseDTO.data = result;
    paginatePokemonResponseDTO.currentPage = page;
    paginatePokemonResponseDTO.pageSize = pageSize;
    paginatePokemonResponseDTO.totalPages = Math.ceil(total / pageSize);
    paginatePokemonResponseDTO.totalItems = total;

    return paginatePokemonResponseDTO;
  }

  async getById(id: number): Promise<PokemonInformationsResponseDTO | null> {
    return await this.pokemonService.getById(id);
  }

  async save(pokemonRequestDTO: PokemonInformationsResponseDTO): Promise<PokemonInformationsResponseDTO> {
    return await this.pokemonService.save(pokemonRequestDTO);
  }

  async update(id: number, pokemonRequestDTO: PokemonInformationsRequestDTO): Promise<PokemonInformationsResponseDTO | null> {
    return await this.pokemonService.update(id, pokemonRequestDTO as PokemonInformationsEntity);
  }

  async deleteById(id: number): Promise<void> {
    this.pokemonService.deleteById(id);
  }
}
