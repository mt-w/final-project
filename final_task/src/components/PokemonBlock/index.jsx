import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { catchPokemon } from "../../redux/actions/pokemon";
import { Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

function PokemonBlock({ id, name, caught, date }) {
  return (
    <div className="pokemon-block">
      <PokemonInfo id={id} name={name} caught={caught} date={date} />
      <div className="pokemon-block__bottom">
        {caught ? (
          <Button className="button--disabled">
            <span> You caught me</span>
          </Button>
        ) : (
          <Button
            onClick={catchPokemon(id, name)}
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

        <Link
          className="pokemon-info-link my-2 text-decoration-none text-reset"
          to={`/card/${id}`}
        >
          <Button className="button--cart">
            <span>Information</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

PokemonBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};
PokemonBlock.defaultProps = {
  name: "---",
};

export default PokemonBlock;
