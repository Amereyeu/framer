import React from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";

function About() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      },
    },
  };

  const variants = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="about"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <Title title="About us" />

      <motion.p
        className="about__text"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        placeat beatae quod quisquam quos, cum ex expedita reiciendis commodi!
        Porro fugit, ullam nostrum assumenda mollitia sit! Animi qui harum
        temporibus?
      </motion.p>
    </motion.div>
  );
}

export default About;
