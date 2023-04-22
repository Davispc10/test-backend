export default class FamilyId {
  private _value: number | null;

  constructor(id: number | null) {
    this._value = id;
  }

  get value(): number | null {
    return this._value;
  }
}
