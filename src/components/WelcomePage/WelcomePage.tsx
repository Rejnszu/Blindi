import React, { useContext } from "react";
import styles from "./WelcomePage.module.scss";
import Header from "../UI/Header";
import AnimatedPages from "../UI/AnimatedPages";
import { PokerContext } from "../store/poker-context";
import Button from "../UI/Button";

const WelcomePage = () => {
  const pokerCtx = useContext(PokerContext);
  return (
    <AnimatedPages>
      <div className={`${styles["welcome-page"]} default-page`}>
        <Header>Blindi</Header>
        <p className={styles["welcome-page__description"]}>
          Witaj w Blindi! Aplikacji, która w prosty sposób pozwoli ci przejść
          przez proces konfigurowania gry w pokera i pozwoli cieszyć się nia z
          przyjaciółmi na najwyższym poziomie.
        </p>
        <p>Na kolejnych stronach będziesz mógł:</p>
        <ul>
          <li>
            W zależności od ilości posiadanych rzetonów oraz ilości graczy
            odpowednio je rozdać
          </li>
          <li>Ustawić wysokość blindów oraz czas rundy</li>
          <li></li>
        </ul>
        <Button onClick={pokerCtx.changePage.bind(null, "game")} type="button">
          Przejdź Dalej
        </Button>
      </div>
    </AnimatedPages>
  );
};

export default WelcomePage;
