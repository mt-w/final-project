import React from "react";
import Button from "../components/Button";
import {
  PokemonBlock,
  PokemonLoadingBlock,
} from "../components";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon } from "../redux/actions/pokemon";
import {incrementPageNumber} from "../redux/actions/page";


function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pokemon }) => pokemon.items);
  const isLoaded = useSelector(({ pokemon }) => pokemon.isLoaded);
  const cartItems = useSelector(({ pokemon }) => pokemon.items);
  const page = useSelector(({ page }) => page.page);
  const isPageLoaded = useSelector(({ page }) => page.isPageLoaded);
  const isLastPage = useSelector(({ page }) => page.isLastPage);
  const isFirstPage = useSelector(({ page }) => page.isFirstPage);

  React.useEffect(() => {
    dispatch(fetchPokemon( page));
  }, []);


  const loadMore = () => {
    dispatch(incrementPageNumber());
    dispatch(fetchPokemon(page+1));
  };

  const back = () => {
    dispatch({ type: "DECREMENT_PAGE_NUMBER" });
    dispatch(fetchPokemon(page-1));
  };

  const handleAddPokemonToCart = (obj) => {
    dispatch({
      type: "ADD_POKEMON_CART",
      payload: obj,
    });
  };

  return (
    <div className="container">
      <h2 className="content__title">All pokemon</h2>
      <div className="content__items">
        {isLoaded&&items.length
          ? items.map((obj) => (
              <PokemonBlock
                onClickAddPokemon={handleAddPokemonToCart}
                key={obj.id}
                caught={obj.caught}
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PokemonLoadingBlock key={index} />)}
      </div>
      <div className="content__bottom">
        {!isFirstPage ? (
          <Button onClick={back} className="button--add">
            <svg className="arrow-left" viewBox="0 0 9 14">
              <path
                className="svg-arrow"
                d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"
              />
            </svg>
            <span>Back</span>
          </Button>
        ) : null}

        {!isLastPage ? (
          <Button onClick={loadMore} className="button--add button--loadMore">
            <span>Load More</span>
            <svg className="arrow-right" viewBox="0 0 9 14">
              <path
                className="svg-arrow"
                d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"
              />
            </svg>
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
