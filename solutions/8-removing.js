// BEGIN
export default function getSameParity(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  const parity = Math.abs(arr[0]) % 2;

  for (const item of arr) {
    if (Math.abs(item) % 2 === parity) {
      result.push(item);
    }
  }

  return result;
}

// END