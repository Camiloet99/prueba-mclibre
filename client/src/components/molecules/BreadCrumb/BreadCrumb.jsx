import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./../../../context/ProductsContext";
import { Link } from "react-router-dom";
import "./BreadCrumb.scss";

export const BreadCrumb = () => {
  const { categories } = useContext(ProductContext);
  const [mostSearchedCategory, setMostSearchedCategory] = useState("");

  useEffect(() => {
    categories?.length > 0
      ? setMostSearchedCategory(categories[0])
      : setMostSearchedCategory("");
  }, [categories]);

  return (
    <div className="mc__breadcrumb__wrapper">
      <Link
        to={`/items?search=${mostSearchedCategory
          .replace(" ", "-")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")}`}
      >
        {mostSearchedCategory}
      </Link>
    </div>
  );
};
