// BEGIN
export default function calculateAverage(arr) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  return sum / arr.length;
}

// END