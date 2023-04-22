export class CheckUndefinedOrReturnValue {
  static check(inputedValue: any, valueToReturn: any): any {
    if (inputedValue === undefined) {
      return valueToReturn;
    }

    return inputedValue;
  }
}
