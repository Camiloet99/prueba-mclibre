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

function parseProducts(products) {
  let responseArray = [];
  products.results.forEach((product) => {
    if (
      !responseArray.some((element) =>
        element.items.some((item) => item.id === product.id)
      )
    ) {
      let productsList = [];
      let categoriesList = [];
      const productsByAuthor = products.results.filter(
        (productByUser) => productByUser.seller?.id === product.seller.id
      );
      productsByAuthor.forEach((filteredProduct) => {
        productsList.push(parseProductResponse(filteredProduct));
        categoriesList.push(filteredProduct.category_id);
      });
      responseArray.push({
        author: {
          name: product.seller.name,
          lastname: product.seller.lastname,
          nickname: product.seller.eshop?.nick_name,
        },
        categories: categoriesList,
        items: productsList,
      });
    }
  });
  return responseArray;
}

function parseProduct(item, itemDescription) {
  return {
    hola: "hola",
  };
}

module.exports = { parseProducts };
