import React, { useState, useContext } from "react";
import mcLogo from "../../../../assets/images/home/mercadolibre_logo.png";
import { ProductContext } from "../../../../context/ProductsContext";
import Searcher from "../../../atoms/Searcher/Searcher";
import { getProductsBySearch } from "./../../../../api/items";
import { Link } from "react-router-dom";
import "./TopHeader.scss";

const TopHeader = () => {
  const [search, setSearch] = useState("");
  const { setProducts } = useContext(ProductContext);

  const onSearch = async () => {
    const response = await getProductsBySearch(search.replace(" ", "-"));
    const products = response.results;
    setProducts && setProducts(products);
  };

  return (
    <div className="mc__top-header__wrapper">
      <div className="mc__top-header__wrapper__content">
        <Link to="/">
          <img
            src={mcLogo}
            alt="logo mercadolibre"
            className="mc__top-header__wrapper__content__logo"
          />
        </Link>
        <Searcher onSubmit={onSearch} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default TopHeader;
