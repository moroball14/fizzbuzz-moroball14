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
    expect(num % 15).not.toBe(0);
    expect(num % 3).not.toBe(0);
    expect(num % 5).not.toBe(0);
    expect(counter.returnFizzBuzz(num * 15)).toBe('Fizz Buzz');
    expect(counter.returnFizzBuzz(num * 3)).toBe('Fizz');
    expect(counter.returnFizzBuzz(num * 5)).toBe('Buzz');
    expect(counter.returnFizzBuzz(num)).toBe(num.toString());
  });
})
