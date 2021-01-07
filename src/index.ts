export class Counter {
  outputOneToHundred(): void {
    let fizzbuzz: string = '';
    for (let i = 1; i <= 100; i++) {
      fizzbuzz += `${this.returnFizzBuzz(i)},`;
    };
    console.log(fizzbuzz.slice(0, -1));
  };

  returnFizzBuzz(number: number): string {
    let result;
    if (number % (3 * 5) === 0) {
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
};

let counter = new Counter();

counter.outputOneToHundred();