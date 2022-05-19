export const numberToCurrency = (amount, decimals, currencyId) => {
  const value = parseFloat(amount) + parseFloat(decimals);
  const currencyFormatter = Intl.NumberFormat(undefined, {
    currency: currencyId,
  });
  return `$ ${currencyFormatter.format(value)}`;
};

export const productsToProductsList = (products) => {
  const parsedList = [];
  products &&
    products.forEach((product) => {
      product.items?.forEach((item) => {
        item.author = product.author;
        parsedList.push(item);
      });
    });
  return parsedList;
};
