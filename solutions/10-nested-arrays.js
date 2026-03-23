// BEGIN
export default function getSuperSeriesWinner(scores) {
  let canadaWins = 0;
  let ussrWins = 0;

  for (const match of scores) {
    const result = Math.sign(match[0] - match[1]);

    if (result === 1) {
      canadaWins += 1;
    } else if (result === -1) {
      ussrWins += 1;
    }
  }

  if (canadaWins > ussrWins) {
    return 'canada';
  }

  if (ussrWins > canadaWins) {
    return 'ussr';
  }

  return null;
}
// END