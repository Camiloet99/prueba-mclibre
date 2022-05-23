const constantData = require("./../constantData");

function parseProduct(product, productDescription) {
  return {
    author: constantData.author,
    item: {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: Math.trunc(product.price),
        decimals: (product.price % 1).toFixed(2).substring(2),
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping?.free_shipping,
      sold_quantity: product.sold_quantity,
      description: productDescription,
    },
  };
}

function parseProductResponse(product) {
  return {
    id: product.id,
    domain_id: product.domain_id,
    title: product.title,
    picture: product.thumbnail,
    condition: product.attributes?.find(
      (attribute) => attribute.id === "ITEM_CONDITION"
    )?.value_name,
    free_shipping: product.shipping?.free_shipping,
    price: {
      currency: product.currency_id,
      amount: Math.trunc(product.price),
      decimals: (product.price % 1).toFixed(2).substring(2),
    },
  };
}

function getNameListFromCategories(categories) {
  const categoryNameList = [];
  if (categories)
    categories?.forEach((category) => categoryNameList.push(category.name));
  return categoryNameList;
}

function parseProducts(products) {
  let productList = [];
  products.results.forEach((product) => {
    productList.push(parseProductResponse(product));
  });
  return {
    author: constantData.author,
    categories: getNameListFromCategories(
      products.available_filters
        ?.find((filter) => filter.id === "category")
        ?.values.sort((a, b) => b.results - a.results)
    ),
    items: productList,
  };
}

module.exports = { parseProducts, parseProduct };
