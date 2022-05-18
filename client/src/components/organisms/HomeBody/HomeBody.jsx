import React, { useState } from "react";
import TopHeader from "../../molecules/HeaderSearcher/TopHeader/TopHeader";
import ProductsList from "../../molecules/ProductsList/ProductsList";
import "./HomeBody.scss";

export const HomeBody = () => {
  const [productList, setProductList] = useState([]);

  return (
    <div className="mc__homebody">
      <TopHeader setProductList={setProductList} />
      <ProductsList products={productList} />
    </div>
  );
};
