import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopHeader from "../../molecules/HeaderSearcher/TopHeader/TopHeader";
import ProductDetailCard from "../../molecules/ProductDetailCard/ProductDetailCard";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="mc__product-detail__wrapper">
      <TopHeader />
      <ProductDetailCard />
    </div>
  );
};

export default ProductDetail;
