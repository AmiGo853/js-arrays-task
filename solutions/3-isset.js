// BEGIN
export const get = (arr, index, defaultValue = null) => {
  return index in arr ? arr[index] : defaultValue;
};

// END