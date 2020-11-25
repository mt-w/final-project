import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="54" src={logo} alt="logo" />
            <div>
              <h1>Pokedex</h1>
              <p>catch all pokemon</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            {" "}
            <Button className="button--cart">
              <a href="/cart" className="button button--cart">
                <span>My caught pokemon</span>
              </a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
