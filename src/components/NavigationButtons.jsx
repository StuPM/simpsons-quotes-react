import React, { Component } from "react";

class NavigationButtons extends Component {
  state = {};

  render() {
    const { sortQuotes, getNewQuotes, searchQuotesByCharacter, readQuotes } =
      this.props;

    return (
      <nav>
        <div className="navContainer">
          <button type="button" onClick={sortQuotes}>
            Sort by name
          </button>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by name..."
            onChange={searchQuotesByCharacter}
          ></input>
          <button type="button" onClick={getNewQuotes}>
            Get new Quotes
          </button>
        </div>
        <div className="navQuotesRead">{`Number of read Quotes: ${readQuotes}`}</div>
      </nav>
    );
  }
}

export default NavigationButtons;
