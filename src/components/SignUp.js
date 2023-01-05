import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
    <form>
        <input type="text" value="login" name="login"/>
        <input type="text" value="nazwa" name="nazwa"/>
        <input type="email" value="e-mail" name="e-mail"/>
        <input type="password" value="" name="password"/>
        <button>Sign Up</button>
    </form>
    <Link to="/"><h3>Home</h3></Link>
    </div>
  );
}

export default SignUp;
