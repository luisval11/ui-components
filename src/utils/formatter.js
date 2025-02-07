export const numberFormatter = (numberAsStr, decimal, grouping) => {
  const number = parseFloat(numberAsStr);
  if (number > 10000 || number < -10000) {
    return Math.floor(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, grouping);
  }
  if (number === 0) {
    return '0';
  }
  return applyTwoDecimals(number, decimal, grouping);
};

const applyTwoDecimals = (number, decimal, grouping) =>
  parseFloat(number.toFixed(2))
    .toString()
    .replace(/,|\./g, decimal)
    .replace(/\B(?=(\d{3})+(?!\d))/g, grouping);

export const applyScientific = (number, decimal, exponential) =>
  number
    .toExponential(exponential)
    .replace(/\.([0-9]*[1-9])?0*/g, '.$1')
    .replace(/,|\./g, decimal);
