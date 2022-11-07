import React, { useState } from "react";
import Header from "../UI/Header";
import GameCounter from "./GameCounter/GameCounter";
import styles from "./Game.module.scss";
import AnimatedPages from "../UI/AnimatedPages";
import Blinds from "./Blinds/Blinds";
import Timers from "./Timers/Timers";
const Game = () => {
  const [blindLevel, setBlindLevel] = useState(0);
  const increaseBlinds = (): void => {
    if (blindLevel < 10) setBlindLevel((prevLevel) => prevLevel + 1);
  };
  return (
    <AnimatedPages>
      <div className={`${styles["game-page"]} default-page`}>
        <Header>Pora zaczać rozgrywkę!</Header>
        <Timers />
        <GameCounter blindLevel={blindLevel} increaseBlinds={increaseBlinds} />
        <Blinds blindLevel={blindLevel} increaseBlinds={increaseBlinds} />
      </div>
    </AnimatedPages>
  );
};

export default Game;
