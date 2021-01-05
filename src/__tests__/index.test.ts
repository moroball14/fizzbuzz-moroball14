import { Counter } from "../index";

jest.mock("../index");
jest.spyOn(console, "log")

const CounterMock = Counter as jest.Mock;

test("count 1 to 100", () => {
  const arr1_100 = Array.from(new Array(100).keys()).map((i)=> i + 1);
  const counter = new Counter();
  const return_ary = counter.oneToHundred();

  CounterMock.mockImplementationOnce(() => {
    return {
      oneToHundred(): number[]{
        console.log('hello world');
        return arr1_100;
      }
    }
  });

  expect(CounterMock).toHaveBeenCalled();
  expect(console.log).toBeCalled();
  expect(return_ary).toEqual(arr1_100);
});