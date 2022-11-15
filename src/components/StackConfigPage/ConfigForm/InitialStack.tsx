import React from "react";
import styles from "./InitialStack.module.scss";
import { StackInitialValue } from "../../models/StackInitiaValueModel";
interface InitialStackProps {
  stackValues: StackInitialValue;
  setInitialStackValue: React.Dispatch<React.SetStateAction<StackInitialValue>>;
  onClick: (e: React.MouseEvent<HTMLDivElement>, style: string) => void;
}
const InitialStack = ({
  stackValues,
  setInitialStackValue,
  onClick,
}: InitialStackProps) => {
  return (
    <div
      onClick={(e) => {
        setInitialStackValue({ ...stackValues });
        onClick(e, `${styles.active}`);
      }}
      className={styles["initial-stack"]}
    >
      {stackValues.value}
    </div>
  );
};

export default InitialStack;
