export const knapsack = (size, items, memo = []) => {
  if (size === 0) return [];
  if (memo.length === 0) memo = new Array(size + 1).fill(0);

  const itemsThatFit = items.filter(item => item.size <= size);
  let mostExpensiveItem = {price: 0, weight: 0};
  for (let i = 0; i < itemsThatFit.length; i++) {
    if (itemsThatFit[i].price > mostExpensiveItem.price) {
      mostExpensiveItem = itemsThatFit[i];
    }
  }
  memo[size] = [...knapsack(size - 1, items, memo)]

  return memo[size];
}
