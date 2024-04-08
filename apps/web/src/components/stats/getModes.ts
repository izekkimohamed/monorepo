import { StatusProps } from ".";

export function getModes(data: StatusProps[]) {
  let modeAmounts: {
    [mode: string]: string;
  } = {};

  data.forEach((entry) => {
    entry.paymentModes.forEach((paymentMode) => {
      modeAmounts[paymentMode.mode] = (
        +(modeAmounts[paymentMode.mode] || 0) + paymentMode.amount
      ).toString();
    });
  });

  const resultArray = Object.entries(modeAmounts).map(([mode, amount]) => ({
    mode,
    amount,
  }));

  return resultArray;
}
