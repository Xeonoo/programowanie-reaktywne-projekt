import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="container">
    <form className="form">
    <input type="text" value="login" name="login"/>
    <input type="password" value="" name="password"/>
    <button>Login</button>
    </form>
    <Link to="/"><h3>Home</h3></Link>
    </div>
  );
}

export default LogIn;
