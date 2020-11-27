import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { fetchCaughtPokemon } from "../redux/actions/pokemon";

function Cart() {
  const dispatch = useDispatch();
  const caughtItems = useSelector(({ pokemon }) => pokemon.items);
  const isLoaded = useSelector(({ pokemon }) => pokemon.isLoaded);
  React.useEffect(() => {
    dispatch(fetchCaughtPokemon());
  }, []);

  const totalCount = caughtItems.length;
  return (
    <div className="container container--cart">
      {isLoaded && caughtItems.length ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">Caught pokemon</h2>
          </div>
          <div className="content__items">
            {caughtItems.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                caughtDate={obj.date}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Number of caught Pokémon: <b>{totalCount} </b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <a
                href="/"
                className="button button--outline button--add go-back-btn"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link to="/">
                  <span>Return</span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>
            No pokemon caught <i>😕</i>
          </h2>
          <p>
            Most likely you haven't caught any pokemon
            <br />
            To do this, return to the main page.
          </p>
          <Link to="/" className="button button--black">
            <span>Return</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
