import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import image from "../../assets/header-cards.png";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <motion.h1
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className={styles.heading}
      >
        {children}
        <img src={image} alt="headerimage" />
      </motion.h1>
    </header>
  );
};

export default Header;
