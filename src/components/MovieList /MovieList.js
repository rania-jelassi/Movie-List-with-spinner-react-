import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieList.css";
import MovieCard from "../MovieCard";
const mapStateToProps = state => ({
  movies: state.tab
});
class MovieList extends Component {
  render() {
    const { minrate = 0, name = "" } = this.props;
    return (
      <div className="movie-list">
        {this.props.movies
          .map((e, key) => <MovieCard movie={e} key={key} />)
          .filter(el => {
            return (
              el.props.movie.rate >= minrate &&
              (name == "" ? true : el.props.movie.name.includes(name))
            );
          })}
      </div>
    );
  }
}
export default connect(mapStateToProps)(MovieList);
