import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});
export const fetchPokemon = () => (dispatch) => {
  dispatch({ type: "SET_LOADED", payload: false });
  axios
    .get(
      `http://localhost:3000/pizzas?caught=true`
    )
    .then(({ data }) => {
      dispatch(setPokemon(data));
    });
};

export const setPokemon = (items) => ({
  type: "SET_POKEMON",
  payload: items,
});


