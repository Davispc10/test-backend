import { FindPokemonByIdRepository } from "../domain/repositories/find-pokemon-by-id.repository";
import { FindPokemonByNameRepository } from "../domain/repositories/find-pokemon-by-name.repository";
import { FindPokemonByNameOrIdService } from "../domain/services/find-pokemon-by-name-or-id.service";

export class FindPokemonByNameOrIdDb implements FindPokemonByNameOrIdService {
  constructor(
    private readonly findPokemonByNameRepository: FindPokemonByNameRepository,
    private readonly findPokemonByIdRepository: FindPokemonByIdRepository,
  ) { }

  async findByNameOrId({ name, id }: FindPokemonByNameOrIdService.Param): Promise<FindPokemonByNameOrIdService.Result> {
    if (!name && !id) throw new Error('Missing field')

    if (id && !name)
      return await this.findPokemonByIdRepository.findById({ id })
    if (name && !id)
      return await this.findPokemonByNameRepository.findByName({ name })
  }
}