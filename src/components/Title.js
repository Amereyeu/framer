import React from "react";
import { motion } from "framer-motion";

function Title({ title }) {
  
  return (
    <motion.div
      className="title"
      initial={{ y: -700 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
    >
      <h2>{title}</h2>
    </motion.div>
  );
}

export default Title;
