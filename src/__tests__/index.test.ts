import { Counter } from '../index';

test('test', () => {
  const arr1_100 = Array.from(new Array(100)).map((v,i)=> i + 1);
  expect(new Counter().oneToHundred()).toBe(arr1_100);
});