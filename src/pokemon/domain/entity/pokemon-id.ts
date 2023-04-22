export default class PokemonId {
  private _value: number;

  constructor(id: number) {
    this._value = id;
    this.validate();
  }

  get value(): number {
    return this._value;
  }

  validate() {
    if (!this._value || !(typeof this._value === 'number')) {
      console.log(this._value);
      throw new Error('Invalid Pokemon Id');
    }
  }
}
