import React, { useState, useEffect, useRef } from "react";
import styles from "./GameCounter.module.scss";
import timeFormatter from "./TimeFormatter";
let interval: NodeJS.Timer;
interface BlindsProps {
  blindLevel: number;
  increaseBlinds: () => void;
}
const GameCounter = ({ blindLevel, increaseBlinds }: BlindsProps) => {
  const [counterFilling, setCounterFilling] = useState(0);
  const [time, setTime] = useState(10);

  const initialTime = useRef<number>(time);
  const [isPlaying, setIsPlaying] = useState(false);
  const [roundIsFinished, setRoundIsFinished] = useState(false);
  function timer(): void {
    if (roundIsFinished) {
      setTime(initialTime.current);
      setRoundIsFinished(false);
      setCounterFilling(0);
    }
    clearInterval(interval);

    if (!isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.02);
        setCounterFilling(
          (prevValue) => prevValue + 360 / initialTime.current / 50
        );
      }, 20);
    }
  }

  useEffect(() => {
    if (time <= 0.1) {
      if (blindLevel < 10) {
        increaseBlinds();
      }
      clearInterval(interval);
      setIsPlaying((prevState) => !prevState);
      setRoundIsFinished(true);
    }
  }, [time]);
  const style = {
    background: `conic-gradient(rgb(0, 0,0) ${counterFilling}deg, transparent ${
      counterFilling + 0.5
    }deg)`,
  };
  return (
    <div style={style} className={styles.counter}>
      <div className={styles["counter__inner-part"]}>
        <button
          onClick={() => {
            setIsPlaying((prevState) => !prevState);
            timer();
          }}
          className={styles["counter__button"]}
        >
          {!roundIsFinished ? (
            <p>{isPlaying ? "Stop" : "Start"}</p>
          ) : (
            <p>Kolejna Runda</p>
          )}
          <p className={styles["counter__time"]}>{timeFormatter(time)}</p>
        </button>
      </div>
    </div>
  );
};

export default GameCounter;
