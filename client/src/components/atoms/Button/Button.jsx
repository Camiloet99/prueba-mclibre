import React from "react";
import "./Button.scss";

const Button = ({ type, color, disabled, text, onClick }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <button
      onClick={handleOnClick}
      disabled={disabled ? disabled : false}
      type={type ? type : "submit"}
      className={`mc__button ${color ? color : "primary"}`}
    >
      {text}
    </button>
  );
};

export default Button;
