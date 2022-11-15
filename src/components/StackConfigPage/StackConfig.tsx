import React, { useContext, useState } from "react";
import Header from "../UI/Header";
import Button from "../UI/Button";
import styles from "./StackConfig.module.scss";
import { PokerContext } from "../store/poker-context";
import AnimatedPages from "../UI/AnimatedPages";
import StackConfigForm from "./ConfigForm/StackConfigForm";
import CalculationLoader from "../UI/CalculationLoader";
import { chips } from "./ConfigForm/ConfigInputs/ChipsData";
import { CalculatedChips } from "../models/CalculatedChipsModel";
import ChipResult from "./ResultOfCalculations/ChipResult";

const StackConfig = () => {
  const pokerCtx = useContext(PokerContext);
  const [showCalculations, setShowCalculations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chipsToCalculate, setChipsToCalculate] = useState<CalculatedChips[]>(
    []
  );
  return (
    <AnimatedPages>
      <div className={`${"default-page"}`}>
        <Header>Configure Your stacks</Header>
        <div className={styles["config-page__description"]}>
          <p>
            On this page you will configure your begginning stack for each
            player based on the informations you provide below
          </p>
        </div>
        <StackConfigForm
          handleLoader={setIsLoading}
          showCalculations={setShowCalculations}
          setChipsToCalculate={setChipsToCalculate}
        />
        {isLoading && <CalculationLoader />}
        {showCalculations && (
          <div className={styles.results}>
            {chipsToCalculate.map((result) => {
              return (
                <ChipResult
                  amount={result.amount}
                  image={
                    chips.find((chip) => chip.value === result.value)!.image
                  }
                />
              );
            })}
          </div>
        )}
        <Button onClick={pokerCtx.changePage.bind(null, "game")} type="button">
          Continue
        </Button>
      </div>
    </AnimatedPages>
  );
};

export default StackConfig;
