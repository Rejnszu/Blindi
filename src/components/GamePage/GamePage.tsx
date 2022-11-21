import React, { useReducer } from "react";
import styles from "./GamePage.module.scss";
import Header from "../UI/Header";
import GameCounter from "./GameCounter/GameCounter";
import AnimatedPages from "../UI/AnimatedPages";
import Blinds from "./Blinds/Blinds";
import Timers from "./Timers/Timers";
import BlindsStructureTable from "./Blinds/BlindsStructureTable";

const initialState = { blindLevel: 0 };

type ACTIONS =
  | { type: "increaseBlinds" }
  | { type: "decreaseBlinds" }
  | { type: "setBlinds"; payload: number };

function blindsReducer(state: typeof initialState, action: ACTIONS) {
  switch (action.type) {
    case "increaseBlinds":
      return { blindLevel: state.blindLevel + 1 };
    case "decreaseBlinds":
      return { blindLevel: state.blindLevel - 1 };
    case "setBlinds":
      return { blindLevel: action.payload };
    default:
      throw new Error("Bad Action");
  }
}
const GamePage = () => {
  const [state, dispatch] = useReducer(blindsReducer, initialState);
  const setBlinds = (value: number): void => {
    dispatch({ type: "setBlinds", payload: value });
  };
  return (
    <AnimatedPages>
      <main className={`${styles["game-page"]} default-page`}>
        <Header>Let's start the game!</Header>
        <BlindsStructureTable
          blindLevel={state.blindLevel}
          setBlinds={setBlinds}
        />
        <Timers />
        <GameCounter
          blindLevel={state.blindLevel}
          increaseBlinds={() => dispatch({ type: "increaseBlinds" })}
        />
        <Blinds
          blindLevel={state.blindLevel}
          increaseBlinds={() => dispatch({ type: "increaseBlinds" })}
          decreaseBlinds={() => dispatch({ type: "decreaseBlinds" })}
        />
      </main>
    </AnimatedPages>
  );
};

export default GamePage;
