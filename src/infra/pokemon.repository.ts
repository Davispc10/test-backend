import { Repository } from "typeorm";
import { FindAllPokemonsRepository } from "../domain/repositories/find-all-pokemons.repository";
import { PgPokemon } from "./pokemon.entity";
import { PgConnection } from "./db";
import { Page } from "../domain/entities/page";
import { FindPokemonByNameRepository } from "../domain/repositories/find-pokemon-by-name.repository";
import { FindPokemonByIdRepository } from "../domain/repositories/find-pokemon-by-id.repository";

export class PokemonRepository implements FindAllPokemonsRepository, FindPokemonByNameRepository, FindPokemonByIdRepository {
  private pokemonRepository: Repository<PgPokemon>

  constructor() {
    this.pokemonRepository = PgConnection.getInstance().getRepository(PgPokemon)
  }

  async findById({ id }: FindPokemonByIdRepository.Param): Promise<FindPokemonByIdRepository.Result> {
    const pokemon = await this.pokemonRepository.findOne({
      where: { id }
    })
    return pokemon ?? undefined
  }

  async findByName({ name }: FindPokemonByNameRepository.Param): Promise<FindPokemonByNameRepository.Result> {
    const pokemon = await this.pokemonRepository.findOne({
      where: [{ name }]
    })

    return pokemon ?? undefined
  }

  async findAll(params: FindAllPokemonsRepository.Params): Promise<FindAllPokemonsRepository.Result> {
    const total = await this.pokemonRepository.count()

    const page = new Page(total, params.page)

    const pokemons = await this.pokemonRepository.find({
      skip: page.getSkipe(),
      take: page.getLimit(),
      order: {
        pokedexNumber: 'ASC'
      },
      where: params.filters
    })

    return {
      data: pokemons,
      page: page.getPage(),
      totalPages: page.getMaxPage(),
      limit: page.getLimit(),
      total: total,
    }
  }

}