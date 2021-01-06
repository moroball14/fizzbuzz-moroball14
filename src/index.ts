export class Counter {
  outputOneToHundred(): void {
    for (let i = 1; i <= 100; i++) {
      console.log(this.returnFizzBuzz(i));
    };
  };

  returnFizzBuzz(number: number): any {
    let result;
    if (number % (3 * 5) === 0) {
      result = "Fizz Buzz";
    } else if (number % 3 === 0) {
      result = "Fizz";
    } else if (number % 5 === 0) {
      result = "Buzz";
    } else {
      result = number;
    };
    return result;
  };
};

let counter = new Counter();

counter.outputOneToHundred();