import React, { useState, useEffect, useRef, useContext } from "react";
import { PokerContext } from "../../store/poker-context";
import styles from "./GameCounter.module.scss";
import timeFormatter from "./TimeFormatter";
const almostFinishedSound = new Audio(
  require("../../../assets/sounds/beep.wav")
);
const finishedSound = new Audio(require("../../../assets/sounds/alarm.wav"));

let shouldPlayBeep = true;

let interval: NodeJS.Timer;
interface BlindsProps {
  blindLevel: number;
  increaseBlinds: () => void;
}
const GameCounter = ({ blindLevel, increaseBlinds }: BlindsProps) => {
  const pokerCtx = useContext(PokerContext);
  const ctxTime = pokerCtx.roundDuration;
  const [counterFilling, setCounterFilling] = useState(0);
  const [time, setTime] = useState(ctxTime);

  const [isPlaying, setIsPlaying] = useState(false);
  const [roundIsFinished, setRoundIsFinished] = useState(false);
  function timer(): void {
    if (roundIsFinished) {
      setTime(ctxTime);
      setRoundIsFinished(false);
      setCounterFilling(0);
    }

    clearInterval(interval);

    if (!isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.02);
        setCounterFilling((prevValue) => prevValue + 360 / ctxTime / 50);
      }, 20);
    }
  }
  const audioHandler = (
    firstAudio: HTMLAudioElement,
    secondAudio: HTMLAudioElement
  ): void => {
    firstAudio.play().then(() => {
      setTimeout(() => {
        firstAudio.pause();
        firstAudio.currentTime = 0;
        secondAudio.play().then(() => {
          setTimeout(() => {
            secondAudio.pause();
            secondAudio.currentTime = 0;
          }, 5000);
        });
      }, 5000);
    });

    shouldPlayBeep = false;
  };

  const finishRoundSetup = (): void => {
    clearInterval(interval);
    setIsPlaying((prevState) => !prevState);
    setRoundIsFinished(true);
    shouldPlayBeep = true;
  };
  const resetRoundSetup = (): void => {
    setTime(ctxTime);
    clearInterval(interval);
    setIsPlaying(false);
    setCounterFilling(0);
    almostFinishedSound.pause();
    almostFinishedSound.currentTime = 0;
    finishedSound.pause();
    finishedSound.currentTime = 0;
    shouldPlayBeep = true;
  };
  useEffect(() => {
    if (time <= 5 && shouldPlayBeep) {
      audioHandler(almostFinishedSound, finishedSound);
    }

    if (time <= 0.1) {
      if (blindLevel < 10) {
        increaseBlinds();
      }
      finishRoundSetup();
    }
  }, [time]);

  useEffect(() => {
    resetRoundSetup();
  }, [ctxTime]);
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
