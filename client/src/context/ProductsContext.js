import React, { createContext, useState, useEffect } from "react";

const defaultContext = {
  products: [],
};

export const ProductContext = createContext(defaultContext);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultContext.products);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
      displayName="Product Context"
    >
      {children}
    </ProductContext.Provider>
  );
};
