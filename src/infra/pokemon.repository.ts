import { Repository } from "typeorm";
import { FindAllPokemonsRepository } from "../domain/repositories/find-all-pokemons.repository";
import { PgPokemon } from "./pokemon.entity";
import { PgConnection } from "./db";
import { Page } from "../domain/entities/page";

export class PokemonRepository implements FindAllPokemonsRepository {
  private pokemonRepository: Repository<PgPokemon>

  constructor() {
    this.pokemonRepository = PgConnection.getInstance().getRepository(PgPokemon)
  }

  async findAll(params: FindAllPokemonsRepository.Params): Promise<FindAllPokemonsRepository.Result> {
    const total = await this.pokemonRepository.count()

    const page = new Page(total, params.page)

    const pokemons = await this.pokemonRepository.find({
      skip: page.getSkipe(),
      take: page.getLimit(),
      order: {
        pokedexNumber: 'ASC'
      }
    })

    return {
      data: pokemons,
      page: page.getPage(),
      totalPage: page.getMaxPage(),
      limit: page.getLimit(),
      total: total,
    }
  }

}