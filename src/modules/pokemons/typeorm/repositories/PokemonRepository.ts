import { Repository } from 'typeorm';
import { dataSource } from '@/shared/typeorm';
import { Pokemon } from '@/modules/pokemons/typeorm/entities/Pokemon';

class PokemonRepository {
  private pokemonRepository: Repository<Pokemon>

  constructor() {
    this.pokemonRepository = dataSource.getRepository(Pokemon)
  }
}
