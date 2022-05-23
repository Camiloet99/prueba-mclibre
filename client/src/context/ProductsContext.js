import React, { createContext, useState, useEffect } from "react";

const defaultContext = {
  products: [],
  listProducts: [],
  searchedItem: "",
  categories: [],
};

export const ProductContext = createContext(defaultContext);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultContext.products);
  const [listProducts, setListProducts] = useState(defaultContext.listProducts);
  const [searchedItem, setSearchedItem] = useState(defaultContext.searchedItem);
  const [categories, setCategories] = useState(defaultContext.categories);

  const clearContext = () => {
    setProducts(defaultContext.products);
    setListProducts(defaultContext.listProducts);
    setSearchedItem(defaultContext.searchedItem);
    setCategories(defaultContext.categories);
  };

  useEffect(() => {
    if (products?.items?.length > 0) {
      setListProducts(
        products.items.slice(0, process.env.REACT_APP_ELEMENTS_TO_VISUALIZE)
      );
      setCategories(products?.categories);
    } else setListProducts(defaultContext.listProducts);
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
        clearContext,
        categories,
      }}
      displayName="Product Context"
    >
      {children}
    </ProductContext.Provider>
  );
};
