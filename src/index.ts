export class Counter {
  outputOneToHundred(): void{
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    };
  };
};

let counter = new Counter();

counter.outputOneToHundred();