import React, { Component } from "react";
import "./styles/SimpsonsQuoteController.scss";

class Quote extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="quote">{this.props.quote}</div>
      </>
    );
  }
}

export default Quote;
