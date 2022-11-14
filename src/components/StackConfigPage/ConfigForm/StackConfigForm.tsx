import React, { useState, useRef } from "react";
import ConfigInput from "./ConfigInputs/StackConfigInput";
import styles from "./StackConfigForm.module.scss";
import { chips } from "./ConfigInputs/ChipsData";
import Button from "../../UI/Button";
import InitialStack from "./InitialStack";

interface StackConfingFormProps {
  handleLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const StackConfigForm = ({ handleLoader }: StackConfingFormProps) => {
  const stackValues: number[] = [500, 1000, 1500, 2000];
  const [selectedChips, setSelectedChips] = useState<number[]>([]);
  const [initialStackValue, setInitialStackValue] = useState(1000);
  const countStack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLoader((prevState) => !prevState);
    setTimeout(() => handleLoader((prevState) => !prevState), 1500);
  };
  const stacksWrapperRef = useRef<HTMLDivElement>(null);

  const setActiveItem = (
    e: React.MouseEvent<HTMLDivElement>,
    style: string
  ): void => {
    Array.from(stacksWrapperRef.current!.children).forEach((child) => {
      child.classList.remove(style);
      e.currentTarget.classList.add(style);
    });
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
              key={stack}
              stackValue={stack}
            />
          );
        })}
      </div>
      <p className={styles["inputs__header"]}>
        Select at least 4 different chips you have (best if you select all the
        chips You have)
      </p>
      <div className={styles.inputs}>
        {chips.map((chips, i) => {
          return (
            <ConfigInput
              addChip={setSelectedChips}
              key={i}
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
