import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext";
import ProductCard from "../../atoms/ProductCard/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { listProducts } = useContext(ProductContext);

  return (
    <ol className="mc__product-list__wrapper">
      {listProducts &&
        listProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              description={product.title}
              price={product.price}
              image={product.picture}
              author={product.author?.nickname}
              currency={product.price.currency}
              shipping={product.free_shipping}
            />
          );
        })}
    </ol>
  );
};

export default ProductsList;
