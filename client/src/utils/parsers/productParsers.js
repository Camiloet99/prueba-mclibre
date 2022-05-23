export const numberToCurrency = (amount, decimals, currencyId, justAmount) => {
  let value = parseFloat(amount) + parseFloat(decimals);
  if (justAmount) {
    value = parseFloat(amount);
  }
  const currencyFormatter = Intl.NumberFormat(undefined, {
    currency: currencyId,
  });
  return `$ ${currencyFormatter.format(value)}`;
};
