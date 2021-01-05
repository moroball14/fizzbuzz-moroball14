import { Counter } from "../index";

test("count 1 to 100", () => {
  const spyLog = jest.spyOn(console, "log");

  new Counter().oneToHundred();

  expect(spyLog.mock.calls).toHaveLength(100);
  Array.from(Array(100).keys()).forEach((i) => {
    expect(spyLog.mock.calls[i]?.[0]).toBe(i + 1);
  });

  spyLog.mockReset();
  spyLog.mockRestore();
});
