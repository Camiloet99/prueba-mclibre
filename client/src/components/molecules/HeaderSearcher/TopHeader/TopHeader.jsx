import React, { useState } from "react";
import mcLogo from "../../../../assets/images/home/mercadolibre_logo.png";
import Searcher from "../../../atoms/Searcher/Searcher";
import { getProductsBySearch } from "./../../../../api/items";
import "./TopHeader.scss";

const TopHeader = () => {
  const [search, setSearch] = useState("");

  const onSearch = async () => {
    console.log("Realizando busqueda");
    console.log(await getProductsBySearch(search));
  };

  return (
    <div className="mc__top-header__container">
      <img
        src={mcLogo}
        alt="logo mercadolibre"
        className="mc__top-header__container__logo"
      />
      <Searcher onSubmit={onSearch} setSearch={setSearch} />
    </div>
  );
};

export default TopHeader;
