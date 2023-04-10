import { InvalidDataException } from "../domain/errors/invalid-data-exception";
import { FindAllPokemonsRepository } from "../domain/repositories/find-all-pokemons.repository";
import { FindAllPokemonsService } from "../domain/services/find-all-pokemons.service";

export class FindAllPokemonsServiceDb implements FindAllPokemonsService {
  constructor(
    private readonly findAllPokemonsRepository: FindAllPokemonsRepository
  ) { }

  async findAll({ page, filters }: FindAllPokemonsService.Params): Promise<FindAllPokemonsService.Result> {
    const optionalFilters = ['type1', 'type2', 'generation', 'hatchable', 'spawns', 'legendary', 'evolve', 'shiny', 'new']

    const formatedFilters: { [key: string]: string | number | boolean } = {}

    for (const [filter, value] of Object.entries(filters)) {
      let formatedValue = value

      if (!optionalFilters.includes(filter)) throw new InvalidDataException('Invalid filter')

      if (filter === 'generation' || filter === 'hatchable') {
        formatedValue = Number(value)
        if (!formatedValue) throw new InvalidDataException(`${filter} must be number`)
        if (formatedValue < 0) throw new InvalidDataException(`${filter} cannot be less than zero`)
        
      } else if (filter === 'spawns' || filter === 'legendary' || filter === 'evolve' || filter === 'shiny' || filter === 'new') {
        if (value !== 'true' && value !== 'false') throw new InvalidDataException(`${filter} must be boolean`)
        formatedValue = !!(value === 'true') ?? false
      }

      Reflect.set(formatedFilters, filter, formatedValue)
    }

    return await this.findAllPokemonsRepository.findAll({ page, filters: formatedFilters })
  }

}