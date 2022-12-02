import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/typeorm';
import { Pokemon } from '../entities/Pokemon';
import { IPokemonsRepository } from '../../IPokemonsRepository';


export class PokemonsRepository implements IPokemonsRepository {
  private pokemonRepository: Repository<Pokemon>;

  constructor() {
    this.pokemonRepository = dataSource.getRepository(Pokemon);
  }

  async create(pokemon: Pokemon): Promise<Pokemon | undefined> {
    const hasPokemon = await this.findByPokedexNumber(pokemon.pokedexNumber)

    if (hasPokemon) {
      return
    }
    try {
      return await this.pokemonRepository.save(pokemon);
    }
    catch (e) {
      console.log(e)
      throw Error()
    }


  }

  async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon | null> {
    return await this.pokemonRepository.findOne({
      where: {
        pokedexNumber
      }
    })
  }
}
