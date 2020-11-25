import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPokemon, catchPokemon } from "../redux/actions/pokemon";
import PokemonInfo from "../components/PokemonBlock/PokemonInfo";
import Button from "../components/Button";

const Card = ({ match}) => {
  const {
    params: { id },
  } = match;

  const dispatch = useDispatch();
  const items = useSelector(({ pokemon }) => pokemon.items);

  React.useEffect(() => {
    dispatch(showPokemon(id));
  }, []);

  const handleAddPokemonToCart = (obj) => {
    dispatch({
      type: "ADD_POKEMON_CART",
      payload: obj,
    });
  };

  return items? (

    <div className="container container--card">
      <PokemonInfo
        onClickAddPokemon={handleAddPokemonToCart}
        key={items.id}
        caught={items.caught}
        {...items}
      />
      <div className="pokemon-block__bottom">
        {items.caught ? (
          <Button className="button--disabled">
            <span> You caught me</span>
          </Button>
        ) : (
          <Button
            onClick={catchPokemon(id, items.name)}
            className="button--add"
            outline
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span> Catch </span>
          </Button>
        )}
      </div>
    </div>
  ) : (
    <span>loading</span>
  );
};

export default Card;
