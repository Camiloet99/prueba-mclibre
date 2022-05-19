const { default: axios } = require("axios");
const parser = require("./../utils/parsers/products");

const getItemsBySearch = async (search) => {
  const objectToSearch = search;
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${objectToSearch}`;
  try {
    const { data } = await axios.get(url);
    const parsedData = parser.parseProducts(data);
    return parsedData;
  } catch (err) {
    console.log(err);
    return {
      message: err,
    };
  }
};

const getItemsById = async (id) => {
  const idToSearch = id;
  const firstUrl = `https://api.mercadolibre.com/items/${idToSearch}`;
  const secondUrl = `https://api.mercadolibre.com/items/${idToSearch}/description`;
  try {
    const firstResponse = (await axios.get(firstUrl)).data;
    const secondResponse = (await axios.get(secondUrl)).data;
    const parsedData = parser.parseProduct(firstResponse, secondResponse);
    return parsedData;
  } catch (err) {
    console.log(err);
    return {
      message: err,
    };
  }
};

module.exports = { getItemsBySearch, getItemsById };
