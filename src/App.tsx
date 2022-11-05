import React, { useState, useContext } from "react";

import WelcomePage from "./components/WelcomePage/WelcomePage";
import BlindsConfig from "./components/BlindsConfigPage/BlindsConfig";
import Game from "./components/GamePage/Game";
import StackConfig from "./components/StackConfigPage/StackConfig";
import { AnimatePresence } from "framer-motion";
import { PokerContext } from "./components/store/poker-context";
import chips from "../src/assets/chips.png";
import cards from "../src/assets/cards.png";
function App() {
  const pokerCtx = useContext(PokerContext);
  return (
    <div className="whole-app">
      <img
        className="whole-app__image whole-app__image--chips"
        src={chips}
        alt="chips"
      />
      <img
        className="whole-app__image whole-app__image--cards"
        src={cards}
        alt="cards"
      />
      <AnimatePresence mode="wait">
        {pokerCtx.page === "welcomePage" && <WelcomePage key="welcomePage" />}
        {pokerCtx.page === "stackConfig" && <StackConfig key="stackConfig" />}
        {pokerCtx.page === "blindsConfig" && (
          <BlindsConfig key="blindsConfig" />
        )}
        {pokerCtx.page === "game" && <Game key="game" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
