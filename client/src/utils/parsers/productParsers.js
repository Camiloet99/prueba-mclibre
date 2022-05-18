export const numberToCurrency = (number, currencyId) => {
  const currencyFormatter = Intl.NumberFormat(undefined, {
    currency: currencyId,
  });
  console.log(currencyFormatter.format(number));
  return `$ ${currencyFormatter.format(number)}`;
};
