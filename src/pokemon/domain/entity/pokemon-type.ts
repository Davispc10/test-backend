import { PokemonTypeEnum } from './pokemon-type.enum';

export default class PokemonType {
  private _value: PokemonTypeEnum;

  constructor(value: PokemonTypeEnum) {
    this._value = value;
    this.validate();
  }

  get value(): PokemonTypeEnum {
    return this._value;
  }

  validate() {
    if (this._value === undefined || !(typeof this._value === 'number')) {
      throw new Error(`Invalid Type ${this._value}`);
    }
  }
}
