import { Pokemon } from '../../modules/pokemons/infra/typeorm/entities/Pokemon';
import { PokemonsRepository } from '../../modules/pokemons/infra/typeorm/repositories/PokemonsRepository';
import { inject, injectable } from 'tsyringe';
import { IPokemonsRepository } from '../../modules/pokemons/domain/repositories/IPokemonsRepository';
import { Information } from '../../modules/pokemons/infra/typeorm/entities/Information';
import { TypeWeather } from '../../modules/pokemons/infra/typeorm/entities/TypeWeather';
import { FightingAttributes } from '../../modules/pokemons/infra/typeorm/entities/FightingAttributes';
import { AdditionalInformation } from '../../modules/pokemons/infra/typeorm/entities/AdditionalInformation';
require('dotenv').config();

const xlsx = require('xlsx');

const columns = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z',
  27: 'AA',
  28: 'AB',
  29: 'AC',
  30: 'AD',
};

const pokemonsAttributes = {
  1: 'name',
  2: 'pokedexNumber',
  3: 'imgName',
  4: 'generation',
  5: 'evolutionStage',
  6: 'evolved',
  7: 'familyId',
  8: 'crossGen',
  9: 'type1',
  10: 'type2',
  11: 'weather1',
  12: 'weather2',
  13: 'statTotal',
  14: 'atk',
  15: 'def',
  16: 'sta',
  17: 'legendary',
  18: 'acquirable',
  19: 'spawns',
  20: 'regional',
  21: 'raidable',
  22: 'hatchable',
  23: 'shiny',
  24: 'nest',
  25: 'new',
  26: 'notGettable',
  27: 'futureEvolve',
  28: 'cp100e40',
  29: 'cp100e39',
};

@injectable()
export class XlsxExtractor {
  private readonly path;
  private readonly worksheet;
  private pokemons: Pokemon[] = [];
  private pokemon: Pokemon | null;
  private workbook;
  private information: Information;
  private type_weather: TypeWeather;
  private fighting_attributes: FightingAttributes;
  private additional_information: AdditionalInformation;

  constructor(
    @inject('PokemonsRepository')
    private pokemonsRepository: IPokemonsRepository,
  ) {
    this.path = String(process.env.XLSX_PATH);
    this.workbook = xlsx.readFile(this.path);
    this.worksheet = this.workbook.Sheets[this.workbook.SheetNames[0]];
  }

  async convertXlsxToJSON() {
    const data = xlsx.utils.sheet_to_json(this.worksheet, {
      header: 'A',
      range: 1,
    });

    //@ts-ignore
    data.map(row => {
      this.information = new Information();
      this.type_weather = new TypeWeather();
      this.fighting_attributes = new FightingAttributes();
      this.additional_information = new AdditionalInformation();

      this.pokemon = new Pokemon();
      this.pokemon.information = this.information;
      this.pokemon.type_weather = this.type_weather;
      this.pokemon.fighting_attributes = this.fighting_attributes;
      this.pokemon.additional_information = this.additional_information;

      for (let i = 1; i <= 29; i++) {
        if (i <= 8) {
          //@ts-ignore
          this.information[pokemonsAttributes[i]] = row[columns[i + 1]];
        } else {
          if (i <= 12) {
            //@ts-ignore
            this.type_weather[pokemonsAttributes[i]] = row[columns[i + 1]];
          } else {
            if (i <= 16 || (i >= 28 && i <= 29)) {
              //@ts-ignore
              this.fighting_attributes[pokemonsAttributes[i]] = row[columns[i + 1]];
            } else {
              if (i <= 27) {
                //@ts-ignore
                this.additional_information[pokemonsAttributes[i]] = row[columns[i + 1]];
              }
            }
          }
        }

        if (i === 29) {
          const pokedexNumber = this.pokemon.information.pokedexNumber;
          this.pokemon.information = this.information;

          this.pokemon.type_weather = this.type_weather;
          this.pokemon.type_weather.pokedexNumber = pokedexNumber;

          this.pokemon.fighting_attributes = this.fighting_attributes;
          this.pokemon.fighting_attributes.pokedexNumber = pokedexNumber;

          this.pokemon.additional_information = this.additional_information;
          this.pokemon.additional_information.pokedexNumber = pokedexNumber;

          this.pokemons.push(this.pokemon);
          this.pokemon = new Pokemon();
        }
      }
    });
    return this.pokemons;
  }

  async populateDatabase() {
    //@ts-ignore
    for (const pokemon: Pokemon of this.pokemons) {
      await this.pokemonsRepository.create(pokemon);
    }
  }
}
