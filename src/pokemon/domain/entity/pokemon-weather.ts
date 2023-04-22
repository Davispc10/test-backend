import { PokemonWeatherEnum } from './pokemon-weather.enum';

export default class PokemonWeather {
  private _value: PokemonWeatherEnum;

  constructor(value: PokemonWeatherEnum) {
    this._value = value;
    this.validate();
  }

  get value(): PokemonWeatherEnum {
    return this._value;
  }

  validate() {
    if (this._value === undefined || !(typeof this._value === 'number')) {
      throw new Error(`Invalid Weather ${this._value}`);
    }
  }
}
