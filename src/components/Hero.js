import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const pathVariants = {
    initial: { opacity: 1, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 2,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const svgVariants = {
    initial: { y: 180, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  };

  return (
    <div className="hero">
      <div className="hero__image">
        <motion.svg
          className="hero__image__svg"
          width="30.85"
          height="30.85"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.path
            d="M9.988 14.886l-2.493-1.969a8.076 8.076 0 00-.222 1.858l-1.007 6.933 3.219-3.22.483-3.321.02-.281zM19.561 11.3c.373.444.686.936.902 1.484l3.189 2.519-.078-.527a8.109 8.109 0 00-2.072-5.417L19.561 11.3zM21.871 21.883l.894 6.244H9.45l-1.099 1.392-2.811-2.811-.602 4.142h20.974l-.838-5.764zM14.268 9.477l-.26-.26 2.023-2.563c-.201-.013-.401-.029-.606-.029-1.681 0-3.243.51-4.542 1.382l2.001 2.001a5.362 5.362 0 011.384-.531z"
            variants={pathVariants}
          />

          <motion.path
            d="M20.279 13.94l-1.973 1.974-2.402-2.402 10.1-10.098L22.589 0l-7.217 9.138 1.974 1.973-2.401 2.401L4.846 3.414 1.432 6.829l9.138 7.216 1.974-1.973 2.401 2.401L4.846 24.57l3.415 3.416 7.218-9.139-1.975-1.973 2.4-2.401 10.1 10.097 3.414-3.414z"
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
        </motion.svg>
      </div>

      <motion.h1
        className="hero__title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Online store
      </motion.h1>
    </div>
  );
}

export default Hero;
