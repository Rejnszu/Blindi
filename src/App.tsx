import React, { useContext, useState, useEffect } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import GamePage from "./components/GamePage/GamePage";
import StackConfigPage from "./components/StackConfigPage/StackConfigPage";
import Loader from "./components/UI/Loader";
import LoaderMobile from "./components/UI/LoaderMobile";
import { AnimatePresence } from "framer-motion";
import { PokerContext } from "./components/store/poker-context";
import chips from "../src/assets/chips.png";
import cards from "../src/assets/cards.png";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const currentPage = useContext(PokerContext).page;

  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 600);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });

  return (
    <main className="whole-app">
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
        {currentPage === "loader" &&
          (!isMobile ? (
            <Loader key="loader" />
          ) : (
            <LoaderMobile key="mobileLoader" />
          ))}
        {currentPage === "welcomePage" && <WelcomePage key="welcomePage" />}
        {currentPage === "stackConfigPage" && (
          <StackConfigPage key="stackConfig" />
        )}
        {currentPage === "gamePage" && <GamePage key="game" />}
      </AnimatePresence>
    </main>
  );
}

export default App;
