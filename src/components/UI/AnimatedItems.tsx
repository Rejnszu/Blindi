import React from "react";
import { motion } from "framer-motion";

interface AnimatedItemsProps {
  children: React.ReactNode;
}
const AnimatedItems = ({ children }: AnimatedItemsProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, when: "afterChildren" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItems;
