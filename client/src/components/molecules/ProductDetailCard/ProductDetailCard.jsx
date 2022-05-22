import React from "react";
import { numberToCurrency } from "./../../../utils/parsers/productParsers";
import Button from "../../atoms/Button/Button";
import "./ProductDetailCard.scss";

const ProductDetailCard = ({ productDetails }) => {
  const {
    picture,
    title,
    condition,
    sold_quantity,
    price,
    free_shipping,
    description,
  } = productDetails.item;

  return (
    <div className="mc__product-detail-card__wrapper">
      <div className="mc__product-detail-card__content">
        <div className="mc__product-detail-card__top">
          <div className="mc__product-detail-card__top__image">
            <img src={picture} alt={title} />
          </div>
          <div className="mc__product-detail-card__top__details">
            <div className="card-details__subtitle">
              <span>{`${condition.charAt(0).toUpperCase() + condition.slice(1)
                } | ${sold_quantity} vendidos.`}</span>
            </div>
            <div className="card-details__title">
              <h1>{title}</h1>
            </div>
            <div className="card-details__price">
              <span>
                {`${numberToCurrency(
                  price?.amount,
                  price?.decimals,
                  price?.currency,
                  false
                )}`}
                <b>{price?.decimals}</b>
              </span>
            </div>
            {free_shipping && (
              <div className="card-details__shipping">
                <span>{"Envío gratis"}</span>
              </div>
            )}
            <form action="" className="card-details__buy-button">
              <Button text={"Comprar"} onClick={() => console.log("Comprar")} />
            </form>
          </div>
        </div>
        <div className="mc__product-detail-card__description">
          {description.plain_text && (
            <div className="mc__product-detail-card__description__content">
              <h2>Descripción del producto:</h2>
              <div className="mc__product-detail-card__description__content__text">
                {description.plain_text.split("\n").map((paragraph, index) => {return <p key={paragraph + index}>{paragraph}</p> })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
