import React, { useEffect, useContext } from "react";
import TopHeader from "../../molecules/HeaderSearcher/TopHeader/TopHeader";
import ProductsList from "../../molecules/ProductsList/ProductsList";
import { ProductContext } from "./../../../context/ProductsContext";
import { useSearchParams } from "react-router-dom";
import { getProductsBySearch } from "./../../../api/items";
import { BreadCrumb } from "./../../molecules/BreadCrumb/BreadCrumb";
import "./HomeBody.scss";

export const HomeBody = () => {
  const [searchParams] = useSearchParams();
  const { setProducts, searchedItem, setListProducts } =
    useContext(ProductContext);

  useEffect(() => {
    const getProductsFromQueryParams = async (productToSearch) => {
      const response = await getProductsBySearch(
        productToSearch.replace(" ", "-")
      );
      setProducts && setProducts(response);
    };
    const searchedElement = searchParams.get("search");
    if (searchedElement !== searchedItem && searchedElement !== null) {
      getProductsFromQueryParams(searchedElement);
    }
  }, [searchParams, setProducts, searchedItem, setListProducts]);

  return (
    <div className="mc__homebody">
      <TopHeader />
      <BreadCrumb />
      <ProductsList />
    </div>
  );
};
