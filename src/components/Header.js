import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import { FiLogIn } from "react-icons/fi";
import "./Header.css";

function Header({setSearch}) {
  const isNotLogged = isExpired(localStorage.getItem('token'))
  const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
  const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
      userId: userId
    })
      .then((response) => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Błąd");
    });
  }

  const searchInput = (value) => {
    setSearch(value);
    navigate("/");
  }
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
              <input onChange={e=>searchInput(e.target.value)}
                type="text"
                placeholder="Szukaj filmów i seriali!"
              />
            </form>
          </div>
        </div>
        <div className="header__login">
        <Link to="/add"><h3>Dodaj Film</h3></Link>
          {name===""?
          <div>
                <FiLogIn color="black" size="1.5em" />
                <Link to="/signin"><h3 style={{paddingRight: "15px"}}>Zaloguj sie</h3></Link>
                <Link to="/signup"><h3>Zarejestruj sie</h3></Link>
                </div>

                :
                <div>
                <p>{name}</p>
                <button onClick={logout}>Logout</button>
                </div>
        }
          
        </div>
      </header>
    </>
  );
}

export default Header;