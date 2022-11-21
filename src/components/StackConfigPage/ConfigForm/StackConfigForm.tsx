import React, { useState, useRef, useEffect } from "react";
import styles from "./StackConfigForm.module.scss";
import { chips } from "./ConfigInputs/ChipsData";
import { stackValues } from "./InitialStack/StackValues";
import { StackInitialValue } from "../../models/StackInitiaValueModel";
import { CalculatedChips } from "../../models/CalculatedChipsModel";
import { conditionFilter } from "../../../actions/ConditionFilter";
import { calculateInitialStack } from "../../../actions/InitialStackCalculator";

import ConfigInput from "./ConfigInputs/StackConfigInput";
import AnimatedItems from "../../UI/AnimatedItems";
import Button from "../../UI/Button";
import InitialStack from "./InitialStack/InitialStack";

interface StackConfingFormProps {
  handleLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setChipsForEachPlayer: React.Dispatch<
    React.SetStateAction<CalculatedChips[]>
  >;
  showCalculations: React.Dispatch<React.SetStateAction<boolean>>;
}
const StackConfigForm = ({
  handleLoader,
  setChipsForEachPlayer,
  showCalculations,
}: StackConfingFormProps) => {
  const [selectedChips, setSelectedChips] = useState<number[]>([]);
  const [initialStackValue, setInitialStackValue] = useState<
    StackInitialValue | undefined
  >(undefined);
  const stacksWrapperRef = useRef<HTMLDivElement>(null);

  const shouldCalculate =
    initialStackValue?.value === 1000 && selectedChips.includes(5)
      ? selectedChips.length >= 4 &&
        selectedChips.length < 6 &&
        selectedChips.includes(100)
      : selectedChips.length >= 4 && selectedChips.length < 6;

  const countStack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showCalculations(false);
    handleLoader((prevState) => !prevState);
    setTimeout(() => {
      handleLoader((prevState) => !prevState);
      showCalculations(true);
    }, 2000);

    setChipsForEachPlayer(
      calculateInitialStack(
        initialStackValue!.value,
        selectedChips.sort((a, b) => a - b)
      )
    );
  };

  const setActiveItemAndReset = (
    e: React.MouseEvent<HTMLDivElement>,
    style: string
  ): void => {
    Array.from(stacksWrapperRef.current!.children).forEach((child) => {
      child.classList.remove(style);
      e.currentTarget.classList.add(style);
    });
    setSelectedChips([]);
    setChipsForEachPlayer([]);
    showCalculations(false);
  };

  useEffect(() => {
    if (!shouldCalculate) {
      showCalculations(false);
    }
  }, [shouldCalculate]);

  return (
    <form className={styles["form"]}>
      <p className={styles["inputs__header"]}>Select the beginning stack:</p>
      <div ref={stacksWrapperRef} className={styles["form__inner-wrapper"]}>
        {stackValues.map((stack) => {
          return (
            <InitialStack
              setActiveItemAndReset={setActiveItemAndReset}
              setInitialStackValue={setInitialStackValue}
              key={stack.value}
              stackValues={{ ...stack }}
            />
          );
        })}
      </div>

      {initialStackValue !== undefined && (
        <AnimatedItems>
          <p className={styles["inputs__header"]}>
            Select between 4 and 5 different chips you have:{" "}
            {selectedChips.includes(5) && initialStackValue.value === 1000 && (
              <span className={styles["chips-warning"]}>
                When selecting 5 you have to also select 100
              </span>
            )}
          </p>

          <div className={styles.inputs}>
            {conditionFilter(
              selectedChips,
              initialStackValue.value,
              chips.filter(
                (chip) =>
                  chip.value >= initialStackValue.chipsMinValue &&
                  chip.value <= initialStackValue.chipsMaxValue
              )
            ).map((chip) => {
              return (
                <ConfigInput
                  setSelectedChips={setSelectedChips}
                  key={chip.value}
                  selectedChips={selectedChips}
                  value={chip.value}
                  image={chip.image}
                />
              );
            })}
          </div>
        </AnimatedItems>
      )}

      {shouldCalculate && (
        <Button onClick={countStack} type="submit">
          Calculate stack
        </Button>
      )}
    </form>
  );
};

export default StackConfigForm;
