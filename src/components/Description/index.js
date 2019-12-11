import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  movies: state.tab
});

class FilmDescription extends Component {
  render() {
    const [movie] = this.props.movies.filter(
      el => el.id == this.props.match.params.id
    );
    console.log(this.props);
    return (
      <div className="description">
        <div className="Description">
          Description Movie: {movie.description}
        </div>

        <Link to="/">
          <button className="retour">Retour</button>
        </Link>
      </div>
    );
  }
}
export default connect(mapStateToProps)(FilmDescription);
