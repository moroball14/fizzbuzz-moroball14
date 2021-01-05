import { Counter } from '../index';

test('count 1 to 100', () => {
  const arr1_100 = Array.from(new Array(100)).map((v,i)=> i + 1);
  const counter = new Counter()
  expect(JSON.stringify(counter.oneToHundred())).toBe(arr1_100);
});