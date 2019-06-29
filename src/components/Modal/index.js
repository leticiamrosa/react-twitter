import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

import Widget from "./../Widget";

class Modal extends Component {
  handleClick = event => {
    if (event.target.closest(".modal__wrapper")) {
      return;
    }

    this.props.fechaModal();
  };

  render() {
    const { estaAberto } = this.props;

    return (
      <div
        className={`modal ${estaAberto && "modal--active"}`}
        onClick={this.handleClick}
      >
        <div className="modal__wrapper">
          <Widget>{this.props.children}</Widget>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  estaAberto: PropTypes.bool.isRequired,
  fechaModal: PropTypes.func.isRequired
};

export default Modal;
