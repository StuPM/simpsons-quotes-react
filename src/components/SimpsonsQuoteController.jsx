import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import NavigationButtons from "./NavigationButtons";
import "./styles/SimpsonsQuoteController.scss";
import { findIndexUtil } from "../utils";

const SimpsonsQuoteController = () => {
  const [readQuotes, setReadQuotes] = useState(0);
  const [simpsons, setSimpsons] = useState([]);

  const fallbackData = [
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
  ];

  useEffect(() => {
    callSimpsonsAPI();
  }, []);

  async function callSimpsonsAPI() {
    const count = 5;

    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`
    );

    const simpsons = results.data;

    if (results.data.length === 5) {
      for (const element of simpsons) {
        element.quoteRead = "notRead";
        element.visible = true;
      }
      setSimpsons([...simpsons]);
    } else {
      setSimpsons(fallbackData);
    }
    setReadQuotes(0);
  }

  const sortQuotes = () => {
    const _simpsons = simpsons.sort((a, b) => {
      const first = a.character;
      const second = b.character;

      if (first < second) {
        return -1;
      }
      if (first > second) {
        return 1;
      }
      return 0;
    });

    setSimpsons([..._simpsons]);
  };

  const deleteQuote = (key) => {
    const indexOfKey = findIndexUtil(key, simpsons);

    const deleteIndexRead = simpsons[indexOfKey].quoteRead;

    const _simpsons = simpsons;
    _simpsons.splice(indexOfKey, 1);

    setSimpsons([..._simpsons]);

    if (deleteIndexRead === "read") {
      setReadQuotes(readQuotes - 1);
    }
  };

  const toggleReadQuote = (key) => {
    const indexOfKey = findIndexUtil(key, simpsons);

    const _simpsons = simpsons;

    const newReadValue =
      _simpsons[indexOfKey].quoteRead === "notRead" ? "read" : "notRead";

    _simpsons[indexOfKey].quoteRead = newReadValue;

    setSimpsons([..._simpsons]);

    if (newReadValue === "read") {
      setReadQuotes(readQuotes + 1);
    } else {
      setReadQuotes(readQuotes - 1);
    }
  };

  const editQuotes = (key, newQuote) => {
    const indexOfKey = findIndexUtil(key, simpsons);

    const _simpsons = simpsons;

    _simpsons[indexOfKey].quote = newQuote;

    setSimpsons([..._simpsons]);
  };

  const searchQuotesByCharacter = () => {
    const searchValue = document
      .getElementById("searchInput")
      .value.toLowerCase();

    const _simpsons = simpsons;

    for (const element of _simpsons) {
      if (element.character.toLowerCase().includes(searchValue)) {
        element.visible = true;
      } else {
        element.visible = false;
      }
    }

    setSimpsons([..._simpsons]);
  };

  if (simpsons) {
    return (
      <>
        <NavigationButtons
          sortQuotes={sortQuotes}
          getNewQuotes={callSimpsonsAPI}
          searchQuotesByCharacter={searchQuotesByCharacter}
          readQuotes={readQuotes}
        />
        <main>
          {simpsons.map(
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
                    deleteQuote={deleteQuote}
                    toggleReadQuote={toggleReadQuote}
                    editQuotes={editQuotes}
                    quoteRead={element.quoteRead}
                  />
                </div>
              )
          )}
        </main>
      </>
    );
  } else {
    return (
      <>
        <h2>Waiting for data...</h2>
      </>
    );
  }
};

export default SimpsonsQuoteController;
