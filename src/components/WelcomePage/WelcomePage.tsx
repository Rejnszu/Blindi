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
          <span> Witaj w Blindi!</span>
          <br /> Aplikacji, która w prosty sposób pozwoli ci przejść przez
          proces konfigurowania gry w pokera i pozwoli cieszyć się nią z
          przyjaciółmi na najwyższym poziomie, oszczędzając przy tym dużo czasu.
        </p>
        <span>Na kolejnych stronach będziesz mógł:</span>
        <ul className={styles["description__list"]}>
          <li>
            W prosty sposób przy pomocy naszego algorytmu rozdać odpowiednią
            ilość rzetonów każdemu graczowi
          </li>
          <li>
            Ustawić wysokość blindów oraz czas rundy, który będziesz mógł
            śledzić przez cały przebieg rozgrywki
          </li>
        </ul>
        <Button onClick={pokerCtx.changePage.bind(null, "game")} type="button">
          Przejdź Dalej
        </Button>
      </div>
    </AnimatedPages>
  );
};

export default WelcomePage;
