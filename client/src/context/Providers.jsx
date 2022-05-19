import React from "react";
import { ProductContextProvider } from "./ProductsContext";

const Providers = ({ children }) => {
  return <ProductContextProvider>{children}</ProductContextProvider>;
};

export default Providers;
