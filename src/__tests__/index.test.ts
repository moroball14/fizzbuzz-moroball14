import { FizzBuzz } from "../fizzbuzz";

describe("FizzBuzz class test", () => {
  const fizzbuzz = new FizzBuzz();

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("must be console.log only once & output values match", () => {
    const spyLog = jest.spyOn(console, "log");
    const fizzbuzzValue = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,Fizz Buzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,Fizz Buzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,Fizz Buzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,Fizz Buzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,Fizz Buzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz";
    fizzbuzz.outputValue();
    const mockArray = spyLog.mock.calls;

    expect(spyLog).toHaveBeenCalledTimes(1);
    expect(mockArray[0][0]).toBe(fizzbuzzValue);
  });

  test("should return values according to the fizzbuzz rules", () => {
    for (let i = 1; i <= 100; i++) {
      const result = fizzbuzz.returnValue(i)
      if (i % 15 === 0) expect(result).toBe('Fizz Buzz');
      else if (i % 3 === 0) expect(result).toBe('Fizz');
      else if (i % 5 === 0) expect(result).toBe('Buzz');
      else expect(result).toBe(i.toString());
    };
  });

  // test("last character must be deleted", () => {
  //   expect(fizzbuzz.formatValue("test")).toBe("tes");
  // });
});
