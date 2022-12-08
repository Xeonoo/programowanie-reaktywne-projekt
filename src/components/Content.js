import React from "react";

import "./Content.css";

function Content() {
  return (
    <div className="content">
    <div className="part_content">
      <div className="content__img">
        <img
          src="./image/tron.png"
          alt="Gra o tron"
        />
      </div>
      <div className="content__description">
        <h1>Gra o tron</h1>
        <h4>
        Game of Thrones <span>2010</span>
        </h4>
        <div className="content__rating">
          <h2>8,8</h2>
          <p>370 023</p>
        </div>
        <div className="content__description__below">
          <p>
            Gatunek <span>Dramat</span>
          </p>
          <p>
            Twórca <span>David Benioff</span>
          </p>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default Content;
