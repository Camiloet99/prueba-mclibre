import React from "react";
import { numberToCurrency } from "../../../utils/parsers/productParsers";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ image, price, description, icon, author, currency }) => {
  const route = `/${description.replace(" ", "-")}`;

  return (
    <li className="mc__product-card">
      <div className="mc__product-card__item-image">
        <Link to={route}>
          <img src={image} alt={description} />
        </Link>
      </div>
      <div className="mc__product-card__description">
        <div className="mc__product-card__description__main">
          <span className="mc__product-card__description__main__price">
            {numberToCurrency(price.amount, price.decimals, currency)}
          </span>
          <div className="mc__product-card__description__main__text">
            <Link to={route}>
              <span>{description}</span>
            </Link>
          </div>
        </div>
        <div className="mc__product-card__description__seller">
          <span>{author}</span>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
