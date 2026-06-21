import { motion } from "framer-motion";
import React from "react";

const Transition = (ComponentPage) => {
  return () => (
    <>
      <motion.div
        className="slid-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <ComponentPage />
      <motion.div
        className="slid-out"
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
