import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Add.css";

class ModalExample extends Component {
  state = {
    modal: false,
    title: "",
    year: "",
    srcPicture: "",
    rate: ""
  };

  movietitle = () => {};
  toggle = () => this.setState({ modal: !this.state.modal });

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  limit = () => {
    if (this.state.rate > 5) {
      alert("rate <= 5");
    } else {
      this.props.ajouterMovie({
        name: this.state.title,
        year: this.state.year,
        picture: this.state.srcPicture,
        rate: this.state.rate
      });
    }
  };

  render() {
    console.log("add", this.state);
    const { buttonLabel, className } = this.props;
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="add">
          +
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
          <ModalBody className="Add-Movie">
            <input
              type="text"
              name="title"
              placeholder="movie title"
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="year"
              placeholder="movie year"
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="srcPicture"
              placeholder="movie srcPicture"
              onChange={this.handleChange}
            />

            <input
              type="number"
              min="0"
              max="5"
              name="rate"
              placeholder="movie rate"
              onChange={this.handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.limit();
              }}
            >
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
