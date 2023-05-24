import { FindAllPokemonsInput, PokemonRepository } from '../repositories/pokemon-repository'

export class GetPokemons {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async execute(input: FindAllPokemonsInput): Promise<any> {
    const pokemons = await this.pokemonRepository.findAll(input)
    return pokemons
  }
}
