export const steps = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  if (n <= 0) return 0;
  memo[n] = steps(n - 1, memo) + steps(n - 2, memo) + steps(n - 3, memo);
  return memo[n];
}
