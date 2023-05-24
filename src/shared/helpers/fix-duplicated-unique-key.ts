import { PokemonDataInput } from '../../application/repositories/pokemon-repository'

export class FixerDuplicatedUniqueKey {
  static fix(pokemons: PokemonDataInput[]): PokemonDataInput[] {
    const uniqueKeys: number[] = []
    const pokemonsWithUniqueKey = pokemons.map((pokemon) => {
      const isDuplicated = uniqueKeys.includes(pokemon.Row)
      if (isDuplicated) {
        pokemon.Row = uniqueKeys.length + 1
      }
      uniqueKeys.push(pokemon.Row)
      return pokemon
    })
    return pokemonsWithUniqueKey
  }
}
