import React, { Component } from "react";

class CharacterButtons extends Component {
  state = {};

  render() {
    const { deleteQuote, character, quote, toggleReadQuote } = this.props;

    const key = character + quote;

    return (
      <div className="characterButtons">
        <button
          className="read button"
          type="button"
          onClick={() => toggleReadQuote(key)}
        >
          Toggle read
        </button>
        <button
          className="delete button"
          type="button"
          onClick={() => deleteQuote(key)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default CharacterButtons;
