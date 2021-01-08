export class FizzBuzz {
  outputValue(): void {
    let fizzbuzz: string = '';
    for (let i = 1; i <= 100; i++) {
      fizzbuzz += `${this.returnValue(i)},`;
    };
    console.log(this.formatValue(fizzbuzz));
  };

  returnValue(number: number): string {
    if (number % 15 === 0) return "Fizz Buzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number.toString();
  };

  formatValue(result: string): string {
    return result.slice(0, -1);
  }
};