import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { isExpired, decodeToken  } from "react-jwt";

import "./css/Details.css"

function Details() {
  const isNotLogged = isExpired(localStorage.getItem('token'))
  const isAdmin = isNotLogged ? false : decodeToken(localStorage.getItem('token')).isAdmin;
  const deleteVideo = () => {
    axios.delete(`https://at.usermd.net/api/movie/${id}`)
    .then((response) => {
        navigate("/");
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })
}
const navigate = useNavigate();


  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get(`https://at.usermd.net/api/movies/${id}`)
    .then((response) => {
        setMovie(response.data);
        setLoading(true);
    })
    .catch((error) =>{
        console.log(error)
    })
}, []);
  return (
    <div className="details">
      <div className="movie">
        <img className="image" src={movie.image} alt={movie.title}/>
        <h1 className="title">{movie.title}</h1>
        {isAdmin ? <div><button className="button" onClick={deleteVideo}>DELETE</button></div> : null}
      </div>
        <p className="content">{movie.content}</p>
    </div>
  );
}

export default Details;