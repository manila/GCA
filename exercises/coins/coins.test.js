import {coins} from './coins';

test('1 cent', () => {
  expect(coins(1)).toBe(1);
});

test('5 cents', () => {
  expect(coins(5)).toBe(2);
});

test('17 cents', () => {
  expect(coins(10)).toBe(6);
});

test('25 cents', () => {
  expect(coins(25)).toBe(916);
});

test('1 dollar', () => {
  expect(coins(100)).toBe(8577828731901);
});
