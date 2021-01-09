export class FizzBuzz {
  outputValue(): void {
    const numbers1_100: Array<number> = Array.from(new Array(100).keys()).map((i)=> i + 1);
    const fizzbuzz: Array<string> = this.conversion(numbers1_100);
    console.log(this.formatValue(fizzbuzz));
  };

  returnValue(number: number): string {
    if (number % 15 === 0) return "Fizz Buzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number.toString();
  };

  formatValue(results: Array<string>): string {
    return results.join(",");
  }

  conversion(numbers: Array<number>) {
    return numbers.map(num => this.returnValue(num));
  }
};