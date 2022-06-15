import {numswap} from './numswap';

test('simple swap', () => {
  expect(numswap([1,2])).toStrictEqual([2,1]);
});

test('simple swap', () => {
  expect(numswap([22,14])).toStrictEqual([14,22]);
});


test('simple swap', () => {
  expect(numswap([-1,4])).toStrictEqual([4,-1]);
});
