import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./css/Content.css";

function Content({movie}) {
  return (
    <div className="content">
      <Link to={`/details/${movie.id}`}>
      <div className="part_content">
        <img className="image" src={movie.image} alt={movie.title}/>
        <p className="title">{movie.title}</p>
      </div>
    </Link>
  </div>
    
  );
}

export default Content;