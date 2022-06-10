export const coins = (price, memo = {}, coin = 1) => {
  if (memo[price]) return memo[price];
  if (price === 0) return 1;
  if (price < 0) return 0;

  memo[price] = coins(price - 25, memo) + coins(price - 10, memo)

  console.log(memo);
  return memo[price]
};
