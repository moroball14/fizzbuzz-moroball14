import { Counter } from "../index";

describe("Counter class test", () => {
  const spyLog = jest.spyOn(console, "log");
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("output 1 to 100", () => {
    new Counter().outputOneToHundred();
    const mockArray = spyLog.mock.calls;
    expect(mockArray).toHaveLength(1);
  });

  test("return fizzbuzz", () => {
    const counter = new Counter;
    const num = 1;
    for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) {
        expect(counter.returnFizzBuzz(num * i)).toBe('Fizz Buzz');
      } else if (i % 3 === 0) {
        expect(counter.returnFizzBuzz(num * i)).toBe('Fizz');
      } else if (i % 5 === 0) {
        expect(counter.returnFizzBuzz(num * i)).toBe('Buzz');
      } else {
        expect(counter.returnFizzBuzz(num)).toBe(num.toString());
      };
    };
  });
});
