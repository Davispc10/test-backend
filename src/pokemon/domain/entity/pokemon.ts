import FamilyId from './family-id';
import PokedexId from './pokedex-id';
import { PokemonEvolutionStageEnum } from './pokemon-evolution-stage.enum';
import { PokemonGenerationEnum } from './pokemon-generation.enum';
import PokemonId from './pokemon-id';
import PokemonStat from './pokemon-stat';
import PokemonType from './pokemon-type';
import { PokemonTypeEnum } from './pokemon-type.enum';
import PokemonWeather from './pokemon-weather';
import { PokemonWeatherEnum } from './pokemon-weather.enum';

export default class Pokemon {
  private _id: PokemonId;
  private _name: string;
  private _pokedexId: PokedexId;
  private _generation: PokemonGenerationEnum;
  private _evolutionStage: PokemonEvolutionStageEnum;
  private _evolved: boolean;
  private _familyId: FamilyId;
  private _type1: PokemonType;
  private _type2: PokemonType;
  private _weather1: PokemonWeather;
  private _weather2: PokemonWeather;
  private _statTotal: PokemonStat;
  private _atk: PokemonStat;
  private _def: PokemonStat;
  private _sta: PokemonStat;

  public constructor(
    id: PokemonId,
    name: string,
    pokedexId: PokedexId,
    generation: PokemonGenerationEnum,
    evolutionStage: PokemonEvolutionStageEnum,
    evolved: boolean,
    familyId: FamilyId,
    type1: PokemonType,
    type2: PokemonType,
    weather1: PokemonWeather,
    weather2: PokemonWeather,
    statTotal: PokemonStat,
    atk: PokemonStat,
    def: PokemonStat,
    sta: PokemonStat,
  ) {
    this._id = id;
    this._name = name;
    this._pokedexId = pokedexId;
    this._generation = generation;
    this._evolutionStage = evolutionStage;
    this._evolved = evolved;
    this._familyId = familyId;
    this._type1 = type1;
    this._type2 = type2;
    this._weather1 = weather1;
    this._weather2 = weather2;
    this._statTotal = statTotal;
    this._atk = atk;
    this._def = def;
    this._sta = sta;

    this.validate();
  }

  get id(): number {
    return this._id.value;
  }

  get name(): string {
    return this._name;
  }

  get pokedexId(): number {
    return this._pokedexId.value;
  }

  get generation(): PokemonGenerationEnum {
    return this._generation;
  }

  get evolutionStage(): PokemonEvolutionStageEnum {
    return this._evolutionStage;
  }

  get evolved(): boolean {
    return this._evolved;
  }

  get familyId(): number {
    return this._familyId.value;
  }

  get type1(): PokemonTypeEnum {
    return this._type1.value;
  }

  get type2(): PokemonTypeEnum {
    return this._type2.value;
  }

  get weather1(): PokemonWeatherEnum {
    return this._weather1.value;
  }

  get weather2(): PokemonWeatherEnum {
    return this._weather2.value;
  }

  get statTotal(): number {
    return this._statTotal.value;
  }

  get atk(): number {
    return this._atk.value;
  }

  get def(): number {
    return this._def.value;
  }

  get sta(): number {
    return this._sta.value;
  }

  validate() {
    if (!this._id) {
      throw new Error('Email is required');
    }

    if (!this._pokedexId) {
      throw new Error('PokedexId is required');
    }

    if (!this._generation) {
      throw new Error('Generation is required');
    }

    if (this._evolutionStage === undefined) {
      throw new Error('Evolution Stage is required');
    }

    if (this._evolved === undefined) {
      throw new Error(
        `Evolved Stage is required for ID ${this._id.value}: ${this._evolved}`,
      );
    }

    if (!this._familyId) {
      throw new Error('FamilyId is required');
    }

    if (!this._type1) {
      throw new Error('Type1 is required');
    }

    if (!this._type2) {
      throw new Error('Type2 is required');
    }

    if (!this._weather1) {
      throw new Error(
        `Weather1 is required for ID ${this._id.value}: ${this._weather1}`,
      );
    }

    if (!this._weather2) {
      throw new Error(
        `Weather2 is required for ID ${this._id.value}: ${this._weather2}`,
      );
    }

    if (!this._statTotal) {
      throw new Error('StatTotal is required');
    }

    if (!this._atk) {
      throw new Error('Atk is required');
    }

    if (!this._def) {
      throw new Error('Def is required');
    }

    if (!this._sta) {
      throw new Error('Sta is required');
    }
  }
}
