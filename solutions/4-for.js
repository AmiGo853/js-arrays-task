// BEGIN
export default function addPrefix(arr, prefix) {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(`${prefix} ${arr[i]}`);
  }

  return result;
}

// END