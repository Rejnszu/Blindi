import React from "react";
import styles from "./Loader.module.scss";
import heartAce from "../../assets/cards/serce.png";
import diamondAce from "../../assets/cards/karo.png";
import clubsAce from "../../assets/cards/trefl.png";
import spadesAce from "../../assets/cards/pik.png";
import { motion } from "framer-motion";
import AnimatedPages from "./AnimatedPages";

const Loader = () => {
  return (
    <AnimatedPages>
      <div className={styles.loader}>
        <motion.img
          key="img1"
          initial={{ opacity: 0 }}
          animate={{
            transform:
              "translateX(-150px) translateY(0) skewY(-10deg) skewX(-2deg)",
            opacity: 1,
          }}
          transition={{ duration: 0, delay: 0 }}
          exit={{
            transform: "translate(-150px, 100px) skewY(-10deg) skewX(-2deg)",
            opacity: 0,
          }}
          src={spadesAce}
          alt="heartace"
        />
        <motion.img
          key="img2"
          initial={{ opacity: 0 }}
          animate={{
            transform:
              "translateX(-50px) translateY(0) skewY(-10deg) skewX(-2deg)",
            opacity: 1,
          }}
          exit={{
            transform: "translate(-150px, 100px) skewY(-10deg) skewX(-2deg)",
            opacity: 0,
          }}
          transition={{ duration: 0, delay: 0.08 }}
          src={diamondAce}
          alt="diamondAce"
        />
        <motion.img
          key="img3"
          initial={{ opacity: 0 }}
          animate={{
            transform:
              "translateX(50px) translateY(0) skewY(-10deg) skewX(-2deg)",
            opacity: 1,
          }}
          exit={{
            transform: "translate(-150px, 100px) skewY(-10deg) skewX(-2deg)",
            opacity: 0,
          }}
          transition={{ duration: 0, delay: 0.16 }}
          src={clubsAce}
          alt="clubsAce"
        />
        <motion.img
          key="img4"
          initial={{ opacity: 0 }}
          animate={{
            transform:
              "translateX(150px) translateY(0) skewY(-10deg) skewX(-2deg)",
            opacity: 1,
          }}
          exit={{
            transform: "translate(-150px, 100px) skewY(-10deg) skewX(-2deg)",
            opacity: 0,
          }}
          transition={{ duration: 0, delay: 0.24 }}
          src={heartAce}
          alt="spadesAce"
        />
      </div>
    </AnimatedPages>
  );
};

export default Loader;
