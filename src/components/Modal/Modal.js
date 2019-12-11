import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { editMovie } from "../../js/actions/index";

const mapDispatchToProps = dispatch => ({
  editMovie: newMovie => dispatch(editMovie(newMovie))
});

class ModalComponet extends Component {
  state = {
    id: this.props.movie.id,
    name: this.props.movie.name,
    year: this.props.movie.year,
    src: this.props.movie.src,
    rate: this.props.movie.rate
  };
  onChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className=""
        >
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <input
              type="text"
              name="name"
              onChange={this.onChangeHandler}
              defaultValue={this.state.name}
            />
            <input
              type="text"
              name="year"
              onChange={this.onChangeHandler}
              defaultValue={this.state.year}
            />
            <input
              type="text"
              name="src"
              onChange={this.onChangeHandler}
              defaultValue={this.state.src}
            />
            <input
              type="text"
              name="rate"
              onChange={this.onChangeHandler}
              defaultValue={this.state.rate}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.editMovie(this.state);
                this.props.toggle();
              }}
            >
              Edit
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(ModalComponet);
