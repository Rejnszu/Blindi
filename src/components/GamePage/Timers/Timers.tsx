import React, { useContext, useRef } from "react";
import styles from "./Timers.module.scss";
import { PokerContext } from "../../store/poker-context";
interface TimerList {
  name: string;
  time: number;
}
const timersList: TimerList[] = [
  { name: "5min", time: 300 },
  { name: "10min", time: 600 },
  { name: "15min", time: 900 },
  { name: "20min", time: 1200 },
  { name: "30min", time: 1800 },
  { name: "60min", time: 3600 },
];
const Timers = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const pokerCtx = useContext(PokerContext);

  const setCurrentRoundTime = (value: number): void => {
    pokerCtx.setCurrentRoundTime(value);
  };

  const setActiveItem = (e: React.MouseEvent<HTMLLIElement>): void => {
    Array.from(listRef.current!.children).forEach((li) => {
      li.classList.remove(`${styles.active}`);
      e.currentTarget.classList.add(`${styles.active}`);
    });
  };

  return (
    <React.Fragment>
      <p className={styles["timer-heading"]}>
        Ustaw czas rundy
        <span className={styles["tooltip"]}>
          W każdej chwili możesz zmienić długość rundy
        </span>
      </p>
      <ul ref={listRef} className={styles.timers}>
        {timersList.map((timer) => {
          return (
            <li
              onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                setCurrentRoundTime(
                  Number(e.currentTarget.getAttribute("data-time"))
                );
                setActiveItem(e);
              }}
              key={timer.name}
              data-time={timer.time}
            >
              {timer.name}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Timers;
