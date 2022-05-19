import React, { createContext, useState, useEffect } from "react";
import { productsToProductsList } from "./../utils/parsers/productParsers";

const defaultContext = {
  products: [],
  listProducts: [],
};

export const ProductContext = createContext(defaultContext);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultContext.products);
  const [listProducts, setListProducts] = useState(defaultContext.listProducts);
  const [searchedItem, setSearchedItem] = useState("");

  useEffect(() => {
    if (products.length) setListProducts(productsToProductsList(products));
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        listProducts,
        searchedItem,
        setSearchedItem,
        setListProducts,
      }}
      displayName="Product Context"
    >
      {children}
    </ProductContext.Provider>
  );
};
