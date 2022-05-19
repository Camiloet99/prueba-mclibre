import React, { useEffect, useContext } from "react";
import TopHeader from "../../molecules/HeaderSearcher/TopHeader/TopHeader";
import ProductsList from "../../molecules/ProductsList/ProductsList";
import { ProductContext } from "./../../../context/ProductsContext";
import { useSearchParams } from "react-router-dom";
import { getProductsBySearch } from "./../../../api/items";
import "./HomeBody.scss";

export const HomeBody = () => {
  const [searchParams] = useSearchParams();
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    const getProductsFromQueryParams = async (productToSearch) => {
      const response = await getProductsBySearch(
        productToSearch.replace(" ", "-")
      );
      setProducts(response.results);
    };
    const searchedElement = searchParams.get("search");
    if (searchedElement) {
      getProductsFromQueryParams(searchedElement);
    }
  }, [searchParams, setProducts]);

  return (
    <div className="mc__homebody">
      <TopHeader />
      <ProductsList />
    </div>
  );
};
