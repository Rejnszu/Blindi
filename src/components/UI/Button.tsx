import React from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";
interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      onClick={onClick}
      className={styles.button}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;
