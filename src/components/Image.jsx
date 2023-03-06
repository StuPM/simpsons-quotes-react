import React, { Component } from "react";
import "./styles/SimpsonsQuoteController.scss";

class Image extends Component {
  state = {};

  render() {
    const { image, order, alt } = this.props;

    return <img src={image} alt={alt} style={{ order }} />;
  }
}

export default Image;
