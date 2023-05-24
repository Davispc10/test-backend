import { FindAllPokemonsInput, PokemonDataInput, PokemonDataStorage, PokemonRepository } from '../../../src/application/repositories/pokemon-repository'

export class PokemonRepositoryFake implements PokemonRepository {
  private pokemonsInMemoryDatabase: PokemonDataStorage[]

  constructor() {
    this.pokemonsInMemoryDatabase = []
  }

  async saveAll(pokemons: PokemonDataInput[]): Promise<void> {
    this.pokemonsInMemoryDatabase = []
    pokemons.map((pokemon) => {
      this.pokemonsInMemoryDatabase.push({
        id: pokemon['Row'],
        name: pokemon['Name'] ?? null,
        pokedex_ref: pokemon['Pokedex Number'] ?? null,
        image_name: pokemon['Img name'] ? String(pokemon['Img name']) : null,
        generation: pokemon['Generation'] ?? null,
        evolution_stage: pokemon['Evolution Stage'] ? String(pokemon['Evolution Stage']) : null,
        evolved: pokemon['Evolved'] ?? null,
        family_id: pokemon['FamilyID'] ?? null,
        type_1: pokemon['Type 1'] ?? null,
        type_2: pokemon['Type 2'] ?? null,
        weather_1: pokemon['Weather 1'] ?? null,
        weather_2: pokemon['Weather 2'] ?? null,
        stat_total: pokemon['STAT TOTAL'] ?? null,
        attack: pokemon['ATK'] ?? null,
        defense: pokemon['DEF'] ?? null,
        stamina: pokemon['STA'] ?? null,
        legendary: pokemon['Legendary'] ?? null,
      })
    })
  }

  /**
   * não implementado por causa da complexidade, porém é possível testar se foi chamado com os parâmetros esperados com um spy e dar um retorno falso com um stub
   */
  async findAll(input: FindAllPokemonsInput): Promise<any[]> {
    const {
      paginationParams: { limit, offset },
    } = input
    const pokemons = this.pokemonsInMemoryDatabase.slice(offset, limit)
    return pokemons
  }

  async findOneById(id: number): Promise<PokemonDataStorage | null> {
    const pokemon = this.pokemonsInMemoryDatabase.find((pokemon) => pokemon.id === id) || null
    return pokemon
  }

  async findAllByPokedexRef(ref: number): Promise<PokemonDataStorage[]> {
    const pokemons = this.pokemonsInMemoryDatabase.filter((pokemon) => pokemon.pokedex_ref === ref)
    return pokemons
  }
}
