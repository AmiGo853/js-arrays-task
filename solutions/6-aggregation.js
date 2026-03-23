// BEGIN
export const calculateSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }

  return sum;
};

// END