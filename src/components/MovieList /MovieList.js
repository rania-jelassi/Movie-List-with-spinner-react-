import React, { Component } from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard";

class MovieList extends Component {
  render() {
    return (
      <div>
        <div className="movie-list">
          {this.props.movies
            .map((e, key) => <MovieCard movie={e} key={key} />)
            .filter(el => {
              return el.props.movie.rate >= this.props.minrate;
            })}
        </div>
      </div>
    );
  }
}
export default MovieList;
