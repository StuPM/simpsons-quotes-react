// import React, { Component } from "react";
import SimpsonsQuoteController from "./components/SimpsonsQuoteController";
import Header from "./components/Header";
import "./App.scss";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <SimpsonsQuoteController />
//       </>
//     );
//   }
// }

// export default App;

import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <SimpsonsQuoteController />
    </>
  );
};

export default App;
