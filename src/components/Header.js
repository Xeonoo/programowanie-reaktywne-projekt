import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

import "./css/Header.css";

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
      <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="FilmWebLogo"/>
      <input className="search" onChange={e=>searchInput(e.target.value)} type="text" placeholder="Szukaj filmów i seriali!"/>
      {name===""?
        <div className="buttondiv">
          <button className="button" onClick={()=>{navigate("/signin")}}>Zaloguj sie</button>
          <button className="button" onClick={()=>{navigate("/signup")}}>Zarejestruj sie</button>
        </div>
      :
        <div className="buttondiv">
          <button className="button" onClick={()=>{navigate("/add")}}>Dodaj Film</button>
          <span className="name">{name}</span>
          <button className="button" onClick={logout}>Logout</button>
        </div>
      }  
    </div>
  );
}

export default Header;