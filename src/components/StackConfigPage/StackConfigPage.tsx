import React, { useContext, useState } from "react";
import Header from "../UI/Header";
import Button from "../UI/Button";
import styles from "./StackConfigPage.module.scss";
import { PokerContext } from "../store/poker-context";
import AnimatedPages from "../UI/AnimatedPages";
import StackConfigForm from "./ConfigForm/StackConfigForm";
import CalculationLoader from "../UI/CalculationLoader";
import { chips } from "./ConfigForm/ConfigInputs/ChipsData";
import { CalculatedChips } from "../models/CalculatedChipsModel";
import ChipResult from "./ResultOfCalculations/ChipResult";
import AnimatedItems from "../UI/AnimatedItems";

const StackConfigPage = () => {
  const pokerCtx = useContext(PokerContext);
  const [showCalculations, setShowCalculations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chipsForEachPlayer, setChipsForEachPlayer] = useState<
    CalculatedChips[]
  >([]);

  return (
    <AnimatedPages>
      <main className={`${"default-page"}`}>
        <Header>Configure Your stacks</Header>
        <div className={styles["config-page__description"]}></div>
        <StackConfigForm
          handleLoader={setIsLoading}
          showCalculations={setShowCalculations}
          setChipsForEachPlayer={setChipsForEachPlayer}
        />
        {isLoading && <CalculationLoader />}

        {showCalculations && (
          <AnimatedItems>
            <div className={styles.results}>
              {chipsForEachPlayer.map((result) => {
                return (
                  <ChipResult
                    key={result.value}
                    amount={result.amount}
                    image={
                      chips.find((chip) => chip.value === result.value)!.image
                    }
                  />
                );
              })}
            </div>
          </AnimatedItems>
        )}

        {showCalculations && !isLoading && (
          <Button
            onClick={pokerCtx.changePage.bind(null, "game")}
            type="button"
          >
            Continue
          </Button>
        )}
      </main>
    </AnimatedPages>
  );
};

export default StackConfigPage;
