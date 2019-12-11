import React from "react";
import "./MovieCard.css";
import Rate from "../Rate/Rate";
import { connect } from "react-redux";
import { deleteMovie } from "../../js/actions/index";
import ModalComponet from "../Modal/Modal";
import { Link } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id))
});

class MovieCard extends React.Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="card">
        <Rate etoile={this.props.movie.rate} />
        <img src={this.props.movie.src} className="photo" />

        <div className="card-body">
          <div className="alignement">
            <h5 className="card-title">
              <strong>{this.props.movie.name}</strong>
            </h5>
            <h5>{this.props.movie.year}</h5>
          </div>
          <div className="alignementCard">
            <Link
              to={`/Description/${this.props.movie.id}`}
              className="descrip"
            >
              Movie Description
            </Link>

            <button type="text" onClick={() => this.toggle()} className="edit">
              {" "}
              Edit
            </button>
            <button
              type="text"
              onClick={() => this.props.deleteMovie(this.props.movie.id)}
              className="remove"
            >
              {" "}
              Remove
            </button>
          </div>
        </div>
        <ModalComponet
          movie={this.props.movie}
          modal={this.state.modal}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MovieCard);
