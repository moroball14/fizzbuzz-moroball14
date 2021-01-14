const DEFAULT_SEPARATOR: string = ",";

export class Fizzbuzz {
  // public method
  public print(): void {
    const numbers1To100: Array<number> = Array.from(new Array(100).keys()).map((i) => i + 1);
    const fizzbuzz: string = this.convert(numbers1To100);
    console.log(fizzbuzz);
  };

  // private method
  private convert(numbers: Array<number>): string {
    const fizzbuzzArray = numbers.map(num => this.convertToFizzBuzz(num));
    const fizzbuzzString = this.formatValue(fizzbuzzArray);
    return fizzbuzzString;
  };

  private formatValue(array: Array<string>, separator: string = DEFAULT_SEPARATOR): string {
    return array.join(separator);
  };

  private convertToFizzBuzz(number: number): string {
    if (number % 15 === 0) return "Fizz Buzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number.toString();
  };
};