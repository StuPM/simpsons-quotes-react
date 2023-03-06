import React from "react";

const CharacterButtons = ({
  deleteQuote,
  character,
  quote,
  toggleReadQuote,
}) => {
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
};

export default CharacterButtons;
