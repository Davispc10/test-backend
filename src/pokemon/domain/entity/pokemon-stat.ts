export default class PokemonStat {
  private _value: number;

  constructor(value: number) {
    this._value = value;
    this.validate();
  }

  get value(): number {
    return this._value;
  }

  validate() {
    if (!this._value || !(typeof this._value === 'number')) {
      throw new Error('Invalid Stat');
    }
  }
}
