export const magicIndex = (arr, i = 0) => {
  const j = Math.ceil((arr.length - i) / 2);

  if (arr[i] === i) return i;
  if (!arr[i]) return -1;
  if (arr[i] > i) return magicIndex(arr, i - j);
  if (arr[i] < i) return magicIndex(arr, i + j);
}
