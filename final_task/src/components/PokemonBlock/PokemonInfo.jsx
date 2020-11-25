import React from "react";

const PokemonInfo = ({ id, name, caught, date }) => {
  return (
    <div className="pokemon-block">
      <img
        className="pokemon-block__image"
        src={process.env.PUBLIC_URL + "/pokemons/" + id + ".png"}
        alt="Pokemon"
      />
      <h4 className="pokemon-block__title">{name}</h4>
      {caught ? <span>Date: {date}</span> : <span>Catch me!</span>}
    </div>
  );
};

export default PokemonInfo;
