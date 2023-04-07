import { FindAllPokemonsRepository } from "../domain/repositories/find-all-pokemons.repository";
import { FindAllPokemonsService } from "../domain/services/find-all-pokemons.service";

export class FindAllPokemonsServiceDb implements FindAllPokemonsService {
  constructor(
    private readonly findAllPokemonsRepository: FindAllPokemonsRepository
  ) { }

  async findAll(params: FindAllPokemonsService.Params): Promise<FindAllPokemonsService.Result> {
    return await this.findAllPokemonsRepository.findAll(params)
  }

}