import React, { Component } from "react";

import CharacterButtons from "./CharacterButtons";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  state = {
    quoteRead: "notRead",
  };

  render() {
    const { character, quote, order, image, deleteQuote, toggleReadQuote } =
      this.props;

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
          />
        </div>
        <Image image={image} alt={character} order={order} />
      </>
    );
  }
}

export default Character;
