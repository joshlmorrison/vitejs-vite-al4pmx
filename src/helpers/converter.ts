interface IConverterContext {
  // fill in properties that will be passed into your converter
  CP_WeightPerCapsuleShell: number;
}
export default class converter {
  convert(value: number, context: IConverterContext) {
    // perform calculation and return that value
    let convertedValue = (value * context.CP_WeightPerCapsuleShell) / 1000000;
    return this.round(convertedValue, 2);
  }
  convertBack(value: number, context: IConverterContext) {
    // perform the inverse calculation and return that value
    return (
      Math.round((value * 1000000) / context.CP_WeightPerCapsuleShell / 50) * 50
    );
  }
  round(value: number, places: number): number {
    let multiplier = Math.pow(10, places);
    let result = Math.round(value * multiplier) / multiplier;
    return result;
  }
}
