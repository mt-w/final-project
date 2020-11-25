import axios from "axios";
export const LIMIT = 12;

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPokemon = (page) => (dispatch) => {
  dispatch({ type: "SET_LOADED", payload: false });
  axios
    .get(
      `/pokemon?&_page=${page}&_limit=${LIMIT}`
    )
    .then(({ data }) => {
      dispatch(setPokemon(data));
    });
};

export const setPokemon = (items) => ({
  type: "SET_POKEMON",
  payload: items,
});

export const showPokemon = (id) => (dispatch) => {
  dispatch({ type: "SET_LOADED", payload: false });
  axios.get(`http://localhost:3001/pokemon/${id}`).then(({ data }) => {
    dispatch(setPokemon(data));
  });
};
export const fetchCaughtPokemon = () => (dispatch) => {
  dispatch({ type: "SET_LOADED", payload: false });
  axios.get(`http://localhost:3001/pokemon?caught=true`).then(({ data }) => {
    dispatch(setPokemon(data));
  });
};

export const setCardPokemon = (items) => ({
  type: "SET_CARD_POKEMON",
  payload: items,
});

export const catchPokemon = (id, name) => (dispatch) => {
  return fetch(`http://localhost:3001/pokemon/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      id: id,
      caught: true,
      date: new Date().toLocaleString("en-GB"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => ({
      id: data.id,
      name: data.name,
      date: data.date,
    }))
    .then(({ data }) => {
      dispatch(setPokemon(data));
    });
};
