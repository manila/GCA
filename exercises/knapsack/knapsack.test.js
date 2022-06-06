import {knapsack} from "./knapsack";

test('knapsack test', () => {
  const items = [
    {name: 'Guitar', price: 1500, size: 1}, 
    {name: 'Stereo', price: 3000, size: 4}, 
    {name: 'Laptop', price: 2000, size: 3}, 
    {name: 'iPhone', price: 2000, size: 1},
  ];

  const size = 4;

  expect(knapsack(size, items)).toBe(3500);
});
