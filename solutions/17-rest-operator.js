// BEGIN
export const getMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const [first, ...rest] = arr;
  let max = first;

  for (const item of rest) {
    if (item > max) {
      max = item;
    }
  }

  return max;
};
// END