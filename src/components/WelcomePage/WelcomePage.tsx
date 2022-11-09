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
        <div className={styles["welcome-page__cta"]}>
          <div className={styles["cta__text"]}>
            <p>Witaj w Blindi</p>
            <p>Prawdziwa gra</p>
            <p>Zaczyna się tutaj</p>
            <p>
              W tej aplikacji w prosty sposób przejdziesz przez proces
              konfigurowania gry w pokera i będziesz się mógł nią cieszyć wraz
              przyjaciółmi, na najwyższym poziomie, oszczędzając przy tym dużo
              czasu.
            </p>
            <Button
              onClick={pokerCtx.changePage.bind(null, "game")}
              type="button"
            >
              Przejdź Dalej
            </Button>
          </div>
          {/* <div className={styles["cta__img"]}></div> */}
        </div>
      </div>
    </AnimatedPages>
  );
};

export default WelcomePage;
