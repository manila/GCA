import {magicIndex} from "./magicindex";

test("magic index 0", () => {
  const arr = [0]

  expect(magicIndex(arr)).toBe(0);
});

test("magic index 1", () => {
  const arr = [-1, 1]

  expect(magicIndex(arr)).toBe(1);
});

test("magic index 5", () => {

  const arr = [-1, 0, 1, 2, 3, 5, 7, 10, 11];

  expect(magicIndex(arr)).toBe(5);
});

test("magic index 3", () => {
  const arr = [-20, -10, 0, 3, 6, 9]

  expect(magicIndex(arr)).toBe(3);
});

test("non-distinct numbers", () => {
  const arr = [-1, -1, -1, -1, -1, 5];

  expect(magicIndex(arr)).toBe(5);
})

test("no magic index", () => {
  const arr = [1, 2, 3, 4];

  expect(magicIndex(arr)).toBe(-1);
});

test("big array", () => {
  const arr = [];

  for (let i = 0; i < 9999999; i++) {
    arr.push(i - 1);
  }

  arr.push(arr.length);
  
  expect(magicIndex(arr)).toBe(arr.length - 1);
});