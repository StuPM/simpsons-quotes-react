import React, { Component } from "react";
import axios from "axios";

import Character from "./Character";
import NavigationButtons from "./NavigationButtons";

import "./styles/SimpsonsQuoteController.scss";

class SimpsonsQuoteController extends Component {
  state = {
    readQuotes: 0,
    simpsons: [
      {
        quote: "They taste like...burning.",
        character: "Ralph Wiggum",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
        characterDirection: "Left",
        quoteRead: "notRead",
        visible: true,
      },
      {
        quote:
          "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
        character: "Milhouse Van Houten",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
        characterDirection: "Right",
        quoteRead: "notRead",
        visible: true,
      },
      {
        quote:
          "Back in Edinburg, we had a coal miners strike. All…apsed. No one made it out alive, not even Willie!",
        character: "Groundskeeper Willie",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FGroundskeeperWillie.png?1497567512063",
        characterDirection: "Right",
        quoteRead: "notRead",
        visible: true,
      },
      {
        quote: "Oh Yeah!",
        character: "Duffman",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
        characterDirection: "Left",
        quoteRead: "notRead",
        visible: true,
      },
      {
        quote: "Shut up, brain. I got friends now. I don't need you anymore.",
        character: "Lisa Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
        characterDirection: "Right",
        quoteRead: "notRead",
        visible: true,
      },
    ],
  };

  async componentDidMount() {
    this.callSimpsonsAPI();
  }

  callSimpsonsAPI = async () => {
    const count = 5;

    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`
    );

    const simpsons = results.data;
    for (const element of simpsons) {
      element.quoteRead = "notRead";
      element.visible = true;
    }

    this.setState({ simpsons });
  };

  deleteQuote = (key) => {
    const indexToDelete = this.state.simpsons.findIndex(
      (element) => element.character + element.quote === key
    );

    const simpsons = [...this.state.simpsons];

    const deleteIndexRead = simpsons[indexToDelete].quoteRead;

    simpsons.splice(indexToDelete, 1);

    deleteIndexRead === "read"
      ? this.setState({ simpsons, readQuotes: this.state.readQuotes - 1 })
      : this.setState({ simpsons });
  };

  sortQuotes = () => {
    this.setState({
      simpsons: this.state.simpsons.sort((a, b) => {
        const first = a.character;
        const second = b.character;

        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      }),
    });
  };

  toggleReadQuote = (key) => {
    const indexToToggle = this.state.simpsons.findIndex(
      (element) => element.character + element.quote === key
    );

    const simpsons = [...this.state.simpsons];
    const newValue =
      simpsons[indexToToggle].quoteRead === "notRead" ? "read" : "notRead";

    simpsons[indexToToggle].quoteRead = newValue;

    if (newValue === "read") {
      this.setState({ simpsons, readQuotes: this.state.readQuotes + 1 });
    } else {
      this.setState({ simpsons, readQuotes: this.state.readQuotes - 1 });
    }
  };

  searchQuotesByCharacter = () => {
    const searchValue = document
      .getElementById("searchInput")
      .value.toLowerCase();

    const simpsons = this.state.simpsons;

    for (const element of simpsons) {
      if (element.character.toLowerCase().includes(searchValue)) {
        element.visible = true;
      } else {
        element.visible = false;
      }
    }

    this.setState({ simpsons });
  };

  render() {
    if (this.state.simpsons) {
      return (
        <>
          <NavigationButtons
            sortQuotes={this.sortQuotes}
            getNewQuotes={this.callSimpsonsAPI}
            searchQuotesByCharacter={this.searchQuotesByCharacter}
            readQuotes={this.state.readQuotes}
          />

          {this.state.simpsons.map(
            (element) =>
              element.visible && (
                <div
                  key={element.quote}
                  className={`quoteContainer ${element.quoteRead}`}
                >
                  <Character
                    character={element.character}
                    quote={element.quote}
                    image={element.image}
                    alt={element.character}
                    order={element.characterDirection === "Left" ? -1 : 1}
                    deleteQuote={this.deleteQuote}
                    toggleReadQuote={this.toggleReadQuote}
                    quoteRead={element.quoteRead}
                  />
                </div>
              )
          )}
        </>
      );
    } else {
      return <h2>Waiting for data...</h2>;
    }
  }
}

export default SimpsonsQuoteController;
