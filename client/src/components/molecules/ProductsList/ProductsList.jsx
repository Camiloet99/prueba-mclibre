import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext";
import ProductCard from "../../atoms/ProductCard/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  return (
    <ol className="mc__product-list__container">
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              description={product.title}
              price={product.price}
              image={product.thumbnail}
              author={product.seller?.eshop?.nick_name}
              currency={product.currency_id}
            />
          );
        })}
    </ol>
  );
};

export default ProductsList;
