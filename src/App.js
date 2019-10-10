import React from "react";
import "./App.scss";
import "./dice.css";
import CheeseContainer from "./components/CheeseContainer";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>A Poor Man's Trivial Pursuit</p>
        <ul className="header-key">
          <li className="header-key-item blue">Geography </li>
          <li className="header-key-item pink">Entertainment </li>
          <li className="header-key-item yellow"> History</li>
          <li className="header-key-item brown">Arts & Literature</li>
          <li className="header-key-item green">Science & Nature</li>
          <li className="header-key-item orange">Sports & Leisure</li>
        </ul>
      </header>
      <GameContainer></GameContainer>
    </div>
  );
}

export default App;
