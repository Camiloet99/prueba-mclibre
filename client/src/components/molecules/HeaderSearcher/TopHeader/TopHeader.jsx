import React, { useState, useContext, useRef } from "react";
import mcLogo from "../../../../assets/images/home/mercadolibre_logo.png";
import { ProductContext } from "../../../../context/ProductsContext";
import Searcher from "../../../atoms/Searcher/Searcher";
import { getProductsBySearch } from "./../../../../api/items";
import { Link, useNavigate } from "react-router-dom";
import "./TopHeader.scss";

const TopHeader = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const inputRef = useRef()
  const { setProducts, setSearchedItem, clearContext } = useContext(ProductContext);

  const onSearch = async () => {
    const searchedProduct = search.replace(" ", "-");
    setSearchedItem(searchedProduct);
    const response = await getProductsBySearch(searchedProduct);
    setProducts && setProducts(response);
    navigate(`/items?search=${searchedProduct}`);
  };

  const handleOnLogoClick = () => {
    inputRef.current.value = ""
    navigate("/")
    setSearch("")
    clearContext()
  };

  return (
    <div className="mc__top-header__wrapper">
      <div className="mc__top-header__wrapper__content">
        <Link to="/" onClick={handleOnLogoClick}>
          <img
            src={mcLogo}
            alt="logo mercadolibre"
            className="mc__top-header__wrapper__content__logo"
          />
        </Link>
        <Searcher onSubmit={onSearch} setSearch={setSearch} inputRef={inputRef} />
      </div>
    </div>
  );
};

export default TopHeader;
