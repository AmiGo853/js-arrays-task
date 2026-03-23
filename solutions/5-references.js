// BEGIN
export const reverse = (arr) => {
  for (let i = 0; i < arr.length / 2; i += 1) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};

// END