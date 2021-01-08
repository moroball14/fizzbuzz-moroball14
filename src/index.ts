export class FizzBuzz {
  outputOneToHundred(): void {
    let fizzbuzz: string = '';
    for (let i = 1; i <= 100; i++) {
      fizzbuzz += `${this.returnFizzBuzz(i)},`;
    };
    console.log(this.formatFizzBuzz(fizzbuzz));
  };

  returnFizzBuzz(number: number): string {
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

  formatFizzBuzz(result: string): string {
    return result.slice(0, -1);
  }
};

let counter = new FizzBuzz();

counter.outputOneToHundred();