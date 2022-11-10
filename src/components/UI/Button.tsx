import React from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
