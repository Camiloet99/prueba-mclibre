import React from "react";
import { SEARCHER_PLACEHOLDER } from "./../../../constants/Home/HomeConstants";
import searchLogo from "./../../../assets/images/home/search_logo.png";
import "./Searcher.scss";

const Searcher = ({ onSubmit, setSearch, inputRef }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit ? onSubmit() : console.log("error");
  };

  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
  };

  return (
    <form className="mc__searcher" onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="items"
        placeholder={SEARCHER_PLACEHOLDER}
        ref={inputRef}
        className="mc__searcher__input-search"
        onChange={handleOnChangeSearch}
      />
      <input
        type="image"
        src={searchLogo}
        alt="Submit"
        className="mc__searcher__logo"
      />
    </form>
  );
};

export default Searcher;
