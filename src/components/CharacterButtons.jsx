import React, { useState } from "react";

const CharacterButtons = (props) => {
  const { deleteQuote, character, quote, toggleReadQuote } = props;
  const key = character + quote;

  const [isEditable, setEditable] = useState(false);

  const setEdit = () => {
    setEditable(!isEditable);
  };

  const saveQuoteEdit = (e) => {
    setEdit();
    console.log(e.target.value);
  };

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

      {isEditable ? (
        <div className="editableContainer">
          <button onClick={saveQuoteEdit} className="button" type="button">
            Save
          </button>
          <input
            type="text"
            placeholder="Edit"
            onChange={(e) => console.log(e.target.value)}
          ></input>
        </div>
      ) : (
        <button onClick={setEdit} className="button" type="button">
          Edit Quote
        </button>
      )}
    </div>
  );
};

export default CharacterButtons;
