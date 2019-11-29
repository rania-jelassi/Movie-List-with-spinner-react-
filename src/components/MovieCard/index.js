import React from "react";
import "./MovieCard.css";
import Rate from "../Rate/Rate";

const MovieCard = props => {
  return (
    <div className="card">
      <Rate etoile={props.movie.rate} />
      <img src={props.movie.picture.src} className="photo" />

      <div className="card-body">
        <div className="alignement">
          <h5 className="card-title">{props.movie.name}</h5>
          <h5>{props.movie.year}</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
