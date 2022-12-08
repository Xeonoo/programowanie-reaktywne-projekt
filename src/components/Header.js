import React from "react";

import { FiLogIn } from "react-icons/fi";

import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="right">
          <img
            className="header__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
            alt="FilmWebLogo"
          />
          <div className="header__search">
            <form>
              <input
                type="text"
                placeholder="Szukaj filmów i seriali!"
              />
            </form>
          </div>
        </div>
        <div className="header__login">
        <FiLogIn color="black" size="1.5em" />
          <h3>Zaloguj się</h3>
          
        </div>
      </header>
    </>
  );
}

export default Header;
