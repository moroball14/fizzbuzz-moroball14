export class Counter {
  oneToHundred(): number[]{
    let num = [];
    for (let i = 1; i <= 100; i++) {
      console.log(i);
      num.push(i);
    };
    return num;
  };
};

let counter = new Counter();

counter.oneToHundred();