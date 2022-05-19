function parseProducts(products) {
  let responseArray = [{}];
  /* products.results.forEach((element) => {
    responseArray.push(element);
  }); */
  products.results.forEach((product) => {
    const productAuthor = product.seller;
    console.log(productAuthor);
    if (
      !responseArray.some(
        (element) =>
          element?.author?.name === productAuthor.name &&
          element?.author?.lastname === productAuthor.lastname
      )
    ) {
      console.log("entra");
      let productsList = [];
      let categoriesList = [];
      const productsByAuthor = products.filter(
        (productByUser) => productByUser.seller?.id === productAuthor.id
      );
      productsByAuthor.forEach((filteredProduct) => {
        productsList.push(parseProductResponse(filteredProduct));
        categoriesList.push(filteredProduct.category_id);
      });
      responseArray.push({
        author: {
          name: productAuthor.name,
          lastname: productAuthor.lastname,
        },
        categories: categoriesList,
        items: productsList,
      });
    } else {
      console.log("no entra");
    }
  });
  return responseArray;
}

const logger = (product) => {
  product.results.forEach((element) => {
    console.log(element.id);
  });
};

function parseProductResponse(product) {
  return {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: Math.trunc(product.price),
      decimals: (product.price % 1).toFixed(2).substring(2),
    },
  };
}

module.exports = { parseProducts };
