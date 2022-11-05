import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedPagesProps {
  children: React.ReactNode;
}
const AnimatedPages = ({ children }: AnimatedPagesProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPages;
