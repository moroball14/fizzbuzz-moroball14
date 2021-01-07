import { Counter } from "../index";

describe("Counter class test", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("output 1 to 100", () => {
    const spyLog = jest.spyOn(console, "log");
    const counter = new Counter()
    let fizzbuzz = '';
    for (let i = 1; i <= 100; i++) {
      fizzbuzz += `${counter.returnFizzBuzz(i)},`;
    };
    counter.outputOneToHundred();
    const mockArray = spyLog.mock.calls;

    expect(mockArray).toHaveLength(1);
    expect(typeof mockArray[0][0]).toBe("string");
    expect(mockArray[0][0]).toBe(fizzbuzz.slice(0, -1));
  });

  test("return fizzbuzz", () => {
    const counter = new Counter;
    for (let i = 1; i <= 15; i++) {
      expect(counter.returnFizzBuzz(15 * i)).toBe('Fizz Buzz');
      if (i % 5 !== 0) expect(counter.returnFizzBuzz(3 * i)).toBe('Fizz');
      if (i % 3 !== 0) expect(counter.returnFizzBuzz(5 * i)).toBe('Buzz');
      if (i % 3 !== 0 && i % 5 !== 0) expect(counter.returnFizzBuzz(i)).toBe(i.toString());
    };
  });
});
