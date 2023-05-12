import React, { useState } from "react";

const CharacterButtons = ({
  deleteQuote,
  character,
  quote,
  toggleReadQuote,
  editQuotes,
  order,
}) => {
  const key = character + quote;

  const [isEditable, setEditable] = useState(false);
  const [newInputQuote, setNewInputQuote] = useState("");

  const setEdit = () => {
    setEditable(!isEditable);
  };

  const saveQuoteEdit = () => {
    setEdit();
    editQuotes(key, newInputQuote);
  };

  return (
    <div className={`characterButtons ${order === -1 ? "drawRight" : ""}`}>
      <div className="controls">
        <button
          className="read"
          type="button"
          onClick={() => toggleReadQuote(key)}
        >
          Toggle Read
        </button>
        <button
          className="delete"
          type="button"
          onClick={() => deleteQuote(key)}
        >
          Delete
        </button>
        <button onClick={setEdit} className="edit" type="button">
          {isEditable ? "Cancel" : `\xa0\xa0Edit\xa0\xa0`}
        </button>
      </div>
      {isEditable && (
        <div className="editableContainer">
          <button onClick={saveQuoteEdit} className="save" type="button">
            Save
          </button>
          <input
            type="text"
            className="editInput"
            placeholder="Edit"
            onChange={(e) => setNewInputQuote(e.target.value)}
          ></input>
        </div>
      )}
    </div>
  );
};

export default CharacterButtons;
