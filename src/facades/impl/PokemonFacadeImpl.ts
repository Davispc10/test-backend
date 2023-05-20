import { PokemonRequestDTO } from "../../dtos/requests/PokemonRequestDTO";
import { PaginatePokemonResponseDTO } from "../../dtos/responses/PaginatePokemonResponseDTO";
import { PokemonResponseDTO } from "../../dtos/responses/PokemonResponseDTO";
import { PokemonEntity } from "../../entities/PokemonEntity";
import { PokemonService } from "../../services/PokemonService";
import { PokemonFacade } from "../PokemonFacade";

export class PokemonFacadeImpl implements PokemonFacade {
  private pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  async getAll(page: number, pageSize: number, type1: string, type2: string, name: string, pokedexNumber: string): Promise<PaginatePokemonResponseDTO> {
    const [result, total] = await this.pokemonService.getAll(page, pageSize, type1, type2, name, pokedexNumber);
    const paginatePokemonResponseDTO = new PaginatePokemonResponseDTO();

    paginatePokemonResponseDTO.data = result;
    paginatePokemonResponseDTO.currentPage = page;
    paginatePokemonResponseDTO.pageSize = pageSize;
    paginatePokemonResponseDTO.totalPages = Math.ceil(total / pageSize);
    paginatePokemonResponseDTO.totalItems = total;

    return paginatePokemonResponseDTO;
  }

  async getById(id: number): Promise<PokemonResponseDTO | null> {
    return await this.pokemonService.getById(id);
  }

  async save(pokemonRequestDTO: PokemonResponseDTO): Promise<PokemonResponseDTO> {
    return await this.pokemonService.save(pokemonRequestDTO);
  }

  async update(id: number, pokemonRequestDTO: PokemonRequestDTO): Promise<PokemonResponseDTO | null> {
    return await this.pokemonService.update(id, pokemonRequestDTO as PokemonEntity);
  }

  async deleteById(id: number): Promise<void> {
    this.pokemonService.deleteById(id);
  }
}
