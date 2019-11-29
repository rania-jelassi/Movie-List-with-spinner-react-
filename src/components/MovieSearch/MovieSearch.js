import React, { Component } from "react";
import "./MovieSearch.css";

export default class MovieSearch extends Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="header-search">
        <input
          type="text"
          onChange={e => this.props.searchFilm(e.target.value)}
        />
      </div>
    );
  }
}
