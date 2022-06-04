import {steps} from './steps';

test('1 step', () => {
  expect(steps(1)).toBe(1);
});

test('2 steps', () => {
  expect(steps(2)).toBe(2);
});

test('3 steps', () => {
  expect(steps(3)).toBe(4);
});

test('4 steps', () => {
  expect(steps(4)).toBe(7);
});

test('5 steps', () => {
  expect(steps(5)).toBe(13);
});

test('zero steps', () => {
  expect(steps(0)).toBe(0);
});

test('negative steps', () => {
  expect(steps(-1)).toBe(0);
});

test('50 steps', () => {
  expect(steps(50)).toBe(10562230626642);
});
