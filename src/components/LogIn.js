import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import './css/LogIn.css';

function LogIn() {
    const [details, setDetails] = useState({login:"", password:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://at.usermd.net/api/user/auth', {
            login: details.login,
            password: details.password
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            console.log(response.data.token)
            navigate("/");
            window.location.reload();
        })
        .catch((error) => {
            setError("Błąd");
        });
    }
    return(
        <div className="LoginForm">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error !== "") ? (<div>{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input type="text" name="login" id="login" onChange={e=>setDetails({...details, login: e.target.value})} value={details.login}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="LOGIN"/>
                    
                </div>
            </form>
        </div>
    );
}

export default LogIn;