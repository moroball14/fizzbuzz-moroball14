export class FizzBuzz {
  outputValue(): void {
    let fizzbuzz: string = '';
    for (let i = 1; i <= 100; i++) {
      fizzbuzz += `${this.returnValue(i)},`;
    };
    console.log(this.formatValue(fizzbuzz));
  };

  returnValue(number: number): string {
    let result;
    if (number % 15 === 0) {
      result = "Fizz Buzz";
    } else if (number % 3 === 0) {
      result = "Fizz";
    } else if (number % 5 === 0) {
      result = "Buzz";
    } else {
      result = number.toString();
    };
    return result;
  };

  formatValue(result: string): string {
    return result.slice(0, -1);
  }
};

let fizzbuzz = new FizzBuzz();

fizzbuzz.outputValue();