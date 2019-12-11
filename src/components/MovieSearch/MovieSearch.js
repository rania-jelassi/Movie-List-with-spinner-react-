import React, { Component } from "react";
import "./MovieSearch.css";

export default class MovieSearch extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={e => this.props.searchFilm(e.target.value)}
        />
      </div>
    );
  }
}
