import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopHeader from "./../../molecules/HeaderSearcher/TopHeader/TopHeader";
import ProductDetailCard from "./../../molecules/ProductDetailCard/ProductDetailCard";
import { getProductDetailsById } from "./../../../api/items";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    const getProductDetails = async (productId) => {
      const response = await getProductDetailsById(productId);
      setProductDetails && setProductDetails(response);
    };
    id && getProductDetails(id);
  }, [id]);

  return (
    <div className="mc__product-detail__wrapper">
      <TopHeader />
      {productDetails && <ProductDetailCard productDetails={productDetails} />}
    </div>
  );
};

export default ProductDetail;
