import React, { useState, useEffect, useContext } from "react";
import { PokerContext } from "../../store/poker-context";
import styles from "./GameCounter.module.scss";
import timeFormatter from "./TimeFormatter";
const almostFinishedSound = new Audio(
  require("../../../assets/sounds/beep.wav")
);
const finishedSound = new Audio(require("../../../assets/sounds/alarm.wav"));

let shouldPlaySound = true;

let interval: NodeJS.Timer;

interface BlindsProps {
  blindLevel: number;
  increaseBlinds: () => void;
}
const GameCounter = ({ blindLevel, increaseBlinds }: BlindsProps) => {
  const roundDuration = useContext(PokerContext).roundDuration;

  const [counterFilling, setCounterFilling] = useState(0);
  const [time, setTime] = useState(roundDuration);

  const [isPlaying, setIsPlaying] = useState(false);
  const [roundIsFinished, setRoundIsFinished] = useState(false);

  function timer(): void {
    if (roundIsFinished) {
      setTime(roundDuration);
      setRoundIsFinished(false);
      setCounterFilling(0);
    }

    clearInterval(interval);

    if (!isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.02);
        setCounterFilling((prevValue) => prevValue + 360 / roundDuration / 50);
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

    shouldPlaySound = false;
  };

  const finishRoundSetup = (): void => {
    clearInterval(interval);
    setIsPlaying((prevState) => !prevState);
    setRoundIsFinished(true);
    shouldPlaySound = true;
  };
  const resetRoundSetup = (): void => {
    setTime(roundDuration);
    clearInterval(interval);
    setIsPlaying(false);
    setCounterFilling(0);
    almostFinishedSound.pause();
    almostFinishedSound.currentTime = 0;
    finishedSound.pause();
    finishedSound.currentTime = 0;
    shouldPlaySound = true;
  };
  useEffect(() => {
    if (time <= 5 && shouldPlaySound) {
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
  }, [roundDuration]);

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
            <p>Next Round</p>
          )}
          <p className={styles["counter__time"]}>{timeFormatter(time)}</p>
        </button>
      </div>
    </div>
  );
};

export default GameCounter;
