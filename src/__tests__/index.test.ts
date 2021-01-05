import { Counter } from '../index';

test('count 1 to 100', () => {
  const arr1_100 = Array.from(new Array(100).keys()).map((i)=> i + 1);
  const counter = new Counter()
  expect(counter.oneToHundred()).toEqual(arr1_100);
});