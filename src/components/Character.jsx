import React from "react";
import Quote from "./Quote";
import CharacterButtons from "./CharacterButtons";
import Image from "./Image.tsx";

const Character = ({
  character,
  quote,
  order,
  image,
  deleteQuote,
  toggleReadQuote,
  editQuotes,
}) => {
  return (
    <>
      <div className="textAndButtonContainer">
        <div className="textContainer">
          <div className="character">{character}</div>
          <Quote quote={quote} />
        </div>
        <CharacterButtons
          toggleReadQuote={toggleReadQuote}
          deleteQuote={deleteQuote}
          character={character}
          quote={quote}
          editQuotes={editQuotes}
          order={order}
        />
      </div>
      <Image image={image} alt={character} order={order} />
    </>
  );
};

export default Character;
