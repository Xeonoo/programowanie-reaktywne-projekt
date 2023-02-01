import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Content.css";

function Content({movie}) {
  return (
    <div className="content">
      <Link to={`/details/${movie.id}`}>
    <div className="part_content">
      <div className="content__img">
        <img
          src={
            movie.image
          }
          alt={
            movie.title
          }
        />
      </div>
      <div className="content__description">
        <h1>{movie.title}</h1> 
      </div>
    </div>
    </Link>
  </div>
    
  );
}

export default Content;
