import React from "react";
import ProductCard from "../../atoms/ProductCard/ProductCard";
import "./ProductsList.scss";

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <ol className="mc__product-list__container">
      {products &&
        products.map((product) => {
          return (
            <ProductCard
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
