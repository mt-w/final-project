import React from "react";
import Button from "./Button";

const CartItem = ({ id, name, onRemove, caughtDate }) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pokemon-block__image"
          src={process.env.PUBLIC_URL + "/pokemons/" + id + ".png"}
          alt="pokemon"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>Дата поимки:{caughtDate}</p>
      </div>
    </div>
  );
};

export default CartItem;
