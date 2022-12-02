import { IPokemonsRepository, SearchParams } from '../../../IPokemonsRepository';
import { Pokemon } from '../../../typeorm/entities/Pokemon';
import { ExcelExtractorTs } from '../../../../../../excelExtractor';
import { IPaginatePokemons } from '../../FindPokemons.use-case';

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

  async findPokemons({page, skip, take}: SearchParams, data: object | null): Promise<IPaginatePokemons | null | Pokemon[]> {
    return this.pokemons;
  }

  async create(pokemon: Pokemon): Promise<Pokemon | undefined> {
    this.pokemons.push(pokemon);
    return pokemon;
  }
}
