export class Fizzbuzz {
  // public method
  public print(): void {
    const numbers1_100: Array<number> = Array.from(new Array(100).keys()).map((i) => i + 1);
    const fizzbuzz: string = this.conversion(numbers1_100);
    console.log(fizzbuzz);
  };

  // private method
  private conversion(numbers: Array<number>): string {
    const fizzbuzzArray = numbers.map(num => this.returnValue(num));
    const fizzbuzzStrings = this.formatValue(fizzbuzzArray);
    return fizzbuzzStrings;
  };

  private formatValue(results: Array<string>): string {
    return results.join(",");
  };

  private returnValue(number: number): string {
    if (number % 15 === 0) return "Fizz Buzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number.toString();
  };
};