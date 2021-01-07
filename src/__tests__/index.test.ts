import { Counter } from "../index";

describe("Counter class test", () => {
  const counter = new Counter();

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("output 1 to 100", () => {
    const spyLog = jest.spyOn(console, "log");
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
    for (let i = 1; i <= 100; i++) {
      const result = counter.returnFizzBuzz(i)
      if (i % 15 === 0) {
        expect(result).toBe('Fizz Buzz');
      } else if (i % 3 === 0) {
        expect(result).toBe('Fizz');
      } else if (i % 5 === 0) {
        expect(result).toBe('Buzz');
      } else {
        expect(result).toBe(i.toString());
      };
    };
  });
});
