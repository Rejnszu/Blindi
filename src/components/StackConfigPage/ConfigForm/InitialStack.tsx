import React from "react";
import styles from "./InitialStack.module.scss";
interface InitialStackProps {
  stackValue: number;
  setInitialStackValue: React.Dispatch<React.SetStateAction<number>>;
  onClick: (e: React.MouseEvent<HTMLDivElement>, style: string) => void;
}
const InitialStack = ({
  stackValue,
  setInitialStackValue,
  onClick,
}: InitialStackProps) => {
  return (
    <div
      onClick={(e) => {
        setInitialStackValue(stackValue);
        onClick(e, `${styles.active}`);
      }}
      className={styles["initial-stack"]}
    >
      {stackValue}
    </div>
  );
};

export default InitialStack;
