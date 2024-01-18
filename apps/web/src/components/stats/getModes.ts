import { StatusProps } from ".";

export function getModes(data: StatusProps[]) {
  let modeAmounts: {
    [mode: string]: string;
  } = {};

  // Iterate through the data array
  data.forEach((entry) => {
    // Iterate through payment modes in each entry
    entry.paymentModes.forEach((paymentMode) => {
      // Check if the mode is already in the object, if not, initialize it with 0
      modeAmounts[paymentMode.mode] = (
        +(modeAmounts[paymentMode.mode] || 0) + paymentMode.amount
      ).toString();
    });
  });

  // Convert the object to an array of mode and amount objects
  const resultArray = Object.entries(modeAmounts).map(([mode, amount]) => ({
    mode,
    amount,
  }));

  return resultArray;
}
