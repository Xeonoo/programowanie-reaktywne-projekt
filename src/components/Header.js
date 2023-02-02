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
    
    <div className="header">
      <header >
        <div>
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
        <div>
          {name===""?
                <div >
                
                <Link className="header__login" to="/signin">Zaloguj sie</Link>
                <Link to="/signup">Zarejestruj sie</Link>
                </div>

                :
                <div>
                  <Link to="/add">Dodaj Film</Link>
                <p>{name}</p>
                <button onClick={logout}>Logout</button>
                </div>
        }
          
        </div>
      </header>
    </div>
  );
}

export default Header;