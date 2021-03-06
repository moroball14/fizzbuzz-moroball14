import { Fizzbuzz } from "../src/fizzbuzz";

describe("Fizzbuzz class test", () => {
  const fizzbuzz = new Fizzbuzz();

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("print", () => {
    test("must be console.log only once & output values match", () => {
      const spyLog = jest.spyOn(console, "log");
      const fizzbuzzValue = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,Fizz Buzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,Fizz Buzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,Fizz Buzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,Fizz Buzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,Fizz Buzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz";
      fizzbuzz.print();
      const printString = spyLog.mock.calls[0][0];

      expect(spyLog).toHaveBeenCalledTimes(1);
      expect(printString).toBe(fizzbuzzValue);
    });
  });

  describe("convert", () => {
    test("must return fizzbuzz strings", () => {
      const prop = [1, 2, 3, 4, 5];
      const expected = "1,2,Fizz,4,Buzz";
      expect(fizzbuzz["convert"](prop)).toEqual(expected);
    });
  });

  describe("formatValue", () => {
    test("must change type to strings from array", () => {
      const prop = ["1", "2", "3", "4", "5"];
      const expected = "1,2,3,4,5";
      expect(fizzbuzz["formatValue"](prop)).toBe(expected);
    });
  });

  describe("convertToFizzBuzz", () => {
    // 同値分割を用いた(inputに対して①数値②Fizz③Buzz④Fizz Buzzを返すグループに分けた)
    test.each`
      prop   | expected
      ${1}   | ${"1"}
      ${49}  | ${"49"}
      ${98}  | ${"98"}
      ${3}   | ${"Fizz"}
      ${51}  | ${"Fizz"}
      ${99}  | ${"Fizz"}
      ${5}   | ${"Buzz"}
      ${50}  | ${"Buzz"}
      ${100} | ${"Buzz"}
      ${15}  | ${"Fizz Buzz"}
      ${45}  | ${"Fizz Buzz"}
      ${90}  | ${"Fizz Buzz"}
    `("must returns $expected if input is $prop", ({ prop, expected }) => {
      expect(fizzbuzz["convertToFizzBuzz"](prop)).toBe(expected);
    });
  });
});
