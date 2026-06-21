import React from "react";
import { motion } from "framer-motion";
import Landing from "../Pages/Landing";

const OscillatingMap = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -3, 0] }} 
      transition={{
        duration: 4,
        repeat: Infinity, 
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Landing /> 
    </motion.div>
  );
};

export default OscillatingMap;
