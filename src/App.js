import React from "react";
import SimpsonsQuoteController from "./components/SimpsonsQuoteController";
import Header from "./components/Header";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <SimpsonsQuoteController />
    </>
  );
};

export default App;
