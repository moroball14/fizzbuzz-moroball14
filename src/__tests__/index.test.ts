import { Counter } from "../index";
let spyLog: any;
beforeEach(() => {
  spyLog = jest.spyOn(console, "log");
});
afterEach(() => {
  spyLog.mockReset();
  spyLog.mockRestore();
});
test("output 1 to 100", () => {
  new Counter().outputOneToHundred();
  const mockArray = spyLog.mock.calls;
  expect(mockArray).toHaveLength(100);
});

test("return fizzbuzz", () => {
  const counter = new Counter;
  expect(counter.returnFizzBuzz(1)).toBe(1);
  // TODO 以下を返すテストを書きたい
    // 15の倍数の数だけFizzBuzz
    // 3の倍数の数だけFizz
    // 5の倍数の数だけBuzz
    // それ以外は数値
})
