import React from "react";

import { FiLogIn } from "react-icons/fi";

import "./Header.css";

import { Link } from "react-router-dom";

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
          <Link to="/signup"><h3 style={{paddingRight: "15px"}}>Zaloguj sie</h3></Link>
          <Link to="/signin"><h3>Zarejestruj sie</h3></Link>
          
        </div>
      </header>
    </>
  );
}

export default Header;
