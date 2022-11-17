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
      <main className={`${styles["welcome-page"]} default-page`}>
        <Header>Blindi</Header>
        <div className={styles["welcome-page__cta"]}>
          <div className={styles["cta__text"]}>
            <p>Welcome to Blindi</p>
            <p>Real game</p>
            <p>Starts here</p>
            <p>
              In this app You will easily go through configuration process of
              poker game, so You can enjoy it with your friends at the highest
              possible level, in addition saving lots of time.
            </p>
            <Button
              onClick={pokerCtx.changePage.bind(null, "stackConfig")}
              type="button"
            >
              Continue
            </Button>
          </div>
        </div>
      </main>
    </AnimatedPages>
  );
};

export default WelcomePage;
