import React from "react";
import "./ProductDetailCard.scss";

const ProductDetailCard = () => {
  return (
    <div className="mc__product-detail-card__wrapper">
      <div className="mc__product-detail-card__top">
        <div className="mc__product-detail-card__top__image">
          <img src="" alt="" />
        </div>
        <div className="mc__product-detail-card__top__description">
          <div className="card-description__subtitle">
            <span></span>
          </div>
          <div className="card-description__title">
            <h1>hola</h1>
          </div>
          <div className="card-description__price">
            <span></span>
          </div>
          <form action="" className="card-description__buy-button">
            <button>
              <span>Comprar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
