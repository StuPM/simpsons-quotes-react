import React from "react";
import SimpsonsQuoteController from "./components/SimpsonsQuoteController";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <SimpsonsQuoteController />
      <Footer />
    </>
  );
};

export default App;
