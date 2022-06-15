export const numswap = (nums) => {
  let [num1, num2] = nums;

  num1 = num1 ^ num2

  num2 = num1 ^ num2

  num1 = num1 ^ num2

  return [num1, num2];
}
