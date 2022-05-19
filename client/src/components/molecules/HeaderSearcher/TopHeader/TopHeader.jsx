import React, { useState, useContext } from "react";
import mcLogo from "../../../../assets/images/home/mercadolibre_logo.png";
import { ProductContext } from "../../../../context/ProductsContext";
import Searcher from "../../../atoms/Searcher/Searcher";
import { getProductsBySearch } from "./../../../../api/items";
import { Link, useNavigate } from "react-router-dom";
import "./TopHeader.scss";

const TopHeader = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { setProducts, setSearchedItem } =
    useContext(ProductContext);

  const onSearch = async () => {
    const searchedProduct = search.replace(" ", "-");
    setSearchedItem(searchedProduct);
    const response = await getProductsBySearch(searchedProduct);
    setProducts && setProducts(response);
    navigate(`/items?search=${searchedProduct}`);
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
