import React, { useState, useRef } from "react";
import ConfigInput from "./ConfigInputs/StackConfigInput";
import styles from "./StackConfigForm.module.scss";
import { chips } from "./ConfigInputs/ChipsData";
import Button from "../../UI/Button";
import InitialStack from "./InitialStack";
import { stackValues } from "./StackValues";
import { StackInitialValue } from "../../models/StackInitiaValueModel";
import { calculateInitialStack } from "../../../actions/InitialStackCalculator";
import { CalculatedChips } from "../../models/CalculatedChipsModel";
interface StackConfingFormProps {
  handleLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setChipsToCalculate: React.Dispatch<React.SetStateAction<CalculatedChips[]>>;
  showCalculations: React.Dispatch<React.SetStateAction<boolean>>;
}
const StackConfigForm = ({
  handleLoader,
  setChipsToCalculate,
  showCalculations,
}: StackConfingFormProps) => {
  const [selectedChips, setSelectedChips] = useState<number[]>([]);
  const stacksWrapperRef = useRef<HTMLDivElement>(null);

  const [initialStackValue, setInitialStackValue] = useState<StackInitialValue>(
    { value: 500, chipsMinValue: 0, chipsMaxValue: 50 }
  );

  const countStack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showCalculations(false);
    handleLoader((prevState) => !prevState);
    setTimeout(() => {
      handleLoader((prevState) => !prevState);
      showCalculations(true);
    }, 2000);
    setChipsToCalculate(
      calculateInitialStack(initialStackValue.value, selectedChips)
    );
  };

  const setActiveItem = (
    e: React.MouseEvent<HTMLDivElement>,
    style: string
  ): void => {
    Array.from(stacksWrapperRef.current!.children).forEach((child) => {
      child.classList.remove(style);
      e.currentTarget.classList.add(style);
    });
    setSelectedChips([]);
  };

  return (
    <form className={styles["form"]}>
      <p className={styles["inputs__header"]}>Select a beginning stack</p>
      <div ref={stacksWrapperRef} className={styles["form__inner-wrapper"]}>
        {stackValues.map((stack) => {
          return (
            <InitialStack
              onClick={setActiveItem}
              setInitialStackValue={setInitialStackValue}
              key={stack.value}
              stackValues={{ ...stack }}
            />
          );
        })}
      </div>
      <p className={styles["inputs__header"]}>
        Select between 4 and 5 different chips you have
      </p>
      <div className={styles.inputs}>
        {chips
          .filter(
            (chips) =>
              chips.value >= initialStackValue.chipsMinValue &&
              chips.value <= initialStackValue.chipsMaxValue
          )
          .map((chips, i) => {
            return (
              <ConfigInput
                addChip={setSelectedChips}
                key={i}
                selectedChips={selectedChips}
                value={chips.value}
                image={chips.image}
              />
            );
          })}
      </div>
      <Button onClick={countStack} type="submit">
        Calculate stack
      </Button>
    </form>
  );
};

export default StackConfigForm;
