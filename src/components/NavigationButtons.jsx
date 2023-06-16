import React from "react";

const NavigationButtons = ({
  sortQuotes,
  getNewQuotes,
  searchQuotesByCharacter,
  readQuotes,
  resetSearchBar,
}) => {
  return (
    <nav>
      <div className="navContainer">
        <button type="button" onClick={sortQuotes}>
          Sort by name
        </button>

        <form id="searchForm">
          <input
            type="text"
            id="searchInput"
            placeholder="Search by name"
            onChange={searchQuotesByCharacter}
          />
          <button type="reset" onClick={resetSearchBar}>
            X
          </button>
        </form>

        <button type="button" onClick={getNewQuotes}>
          Get new Quotes
        </button>
      </div>
      <div className="navQuotesRead">{`Number of read Quotes: ${readQuotes}`}</div>
    </nav>
  );
};

export default NavigationButtons;
