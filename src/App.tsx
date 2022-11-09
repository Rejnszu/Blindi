import React, { useContext, useState, useEffect } from "react";

import WelcomePage from "./components/WelcomePage/WelcomePage";

import Game from "./components/GamePage/Game";
import StackConfig from "./components/StackConfigPage/StackConfig";
import { AnimatePresence } from "framer-motion";
import { PokerContext } from "./components/store/poker-context";
import chips from "../src/assets/chips.png";
import cards from "../src/assets/cards.png";
import Loader from "./components/UI/Loader";
import LoaderMobile from "./components/UI/LoaderMobile";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 600);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });
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
        {pokerCtx.page === "loader" &&
          (!isMobile ? (
            <Loader key="loader" />
          ) : (
            <LoaderMobile key="mobileLoader" />
          ))}
        {pokerCtx.page === "welcomePage" && <WelcomePage key="welcomePage" />}
        {pokerCtx.page === "stackConfig" && <StackConfig key="stackConfig" />}
        {pokerCtx.page === "game" && <Game key="game" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
