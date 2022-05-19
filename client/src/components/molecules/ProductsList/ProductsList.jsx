import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext";
import ProductCard from "../../atoms/ProductCard/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { listProducts } = useContext(ProductContext);

  return (
    <ol className="mc__product-list__container">
      {listProducts &&
        listProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              description={product.title}
              price={product.price}
              image={product.picture}
              author={product.seller?.eshop?.nick_name}
              currency={product.price.currency}
            />
          );
        })}
    </ol>
  );
};

export default ProductsList;
