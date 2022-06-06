import {fib} from './fib';

test('1st number in fib sequence', () => {
  expect(fib(1)).toBe(1);
});

test('2nd number in fib sequence', () => {
  expect(fib(2)).toBe(1);
});

test('0th number in the fib sequence', () => {
  expect(fib(0)).toBe(0);
});

test('invalid number in the fib sequence', () => {
  expect(fib(-1)).toBe(0);
});

test('7th number in fib sequence', () => {
  expect(fib(7)).toBe(13);
});

test('42nd number in fib sequence', () => {
  expect(fib(42)).toBe(267914296);
});

test('64th number in fib sequence', () => {
  expect(fib(64)).toBe(10610209857723);
});
