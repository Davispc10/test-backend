import { IPokemonsRepository } from '../../../IPokemonsRepository';
import { Pokemon } from '../../../typeorm/entities/Pokemon';
import { ExcelExtractorTs } from '../../../../../../excelExtractor';

export class InMemoryPokemonsRepository implements IPokemonsRepository {
  private extractor;
  private pokemons: any[] = [];

  constructor() {
    this.extractor = new ExcelExtractorTs('Pokemon Go.xlsx');
    this.populate().then();
  }

  async populate() {
    this.pokemons = await this.extractor.create();
  }

  async findByPokedexNumber(
    pokedexNumber: number,
  ): Promise<Pokemon | undefined> {
    return this.pokemons.find(
      pokemon => pokemon.pokedexNumber === pokedexNumber,
    );
  }

  async findPokemons(data: object | null): Promise<Pokemon[] | null> {
    return this.pokemons;
  }

  async create(pokemon: Pokemon): Promise<Pokemon | undefined> {
    this.pokemons.push(pokemon);
    return pokemon;
  }
}
