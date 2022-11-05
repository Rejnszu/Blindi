import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <motion.h1
        initial={{ opacity: 0, x: "-200px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className={styles.heading}
      >
        {children}
      </motion.h1>
    </header>
  );
};

export default Header;
