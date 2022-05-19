export const numberToCurrency = (number, currencyId) => {
  const currencyFormatter = Intl.NumberFormat(undefined, {
    currency: currencyId,
  });
  return `$ ${currencyFormatter.format(number)}`;
};
