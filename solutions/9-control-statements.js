// BEGIN
export default function getTotalAmount(wallet, currency) {
  let sum = 0;

  for (const bill of wallet) {
    const billCurrency = bill.slice(0, 3);

    if (billCurrency !== currency) {
      continue;
    }

    const value = Number(bill.slice(4));
    sum += value;
  }

  return sum;
}
// END